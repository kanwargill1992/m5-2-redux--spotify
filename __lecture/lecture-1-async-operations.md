# 5.2.1 Redux async

---

Now that you've seen redux, hopefully this pattern looks familiar:

```js
const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(someAction());
  };

  return <button onClick={handleClick}>Do something</button>;
};
```

---

# A new scenario

I need to request some data from the server.

I want to show a spinner while it's fetching

---

Let's solve this together

```js
// My actions:
const startRequestingData = () => ({
  type: "START_REQUESTING_DATA",
});

const receiveData = (data) => ({
  type: "RECEIVE_DATA",
  data,
});

const failToRetrieveData = (error) => ({
  type: "FAIL_TO_RETRIEVE_DATA",
  error,
});

const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startRequestingData());
    fetch("/some-data")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveData(data));
      })
      .catch((err) => {
        dispatch(failToRetriveData(err));
      });
  };

  return <button onClick={handleClick}>Do something</button>;
};
```

---

# Exercises

Dispatch the actions

---

<Timer />

```js
const receiveHockeyScores = (scores) => ({
  type: "RECEIVE_HOCKEY_SCORES",
  scores,
});
const receiveBaseballScores = (scores) => ({
  type: "RECEIVE_BASEBALL_SCORES",
  scores,
});

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("/hockey")
      .then((res) => res.json())
      .then((scores) => {
        dispatch(receiveHockeyScores(scores));
      });

    fetch("/baseball")
      .then((res) => res.json())
      .then((scores) => {
        dispatch(receiveBaseBallScores(scores));
      });
  }, []);
  // it will update twice
  return <Scores />;
};
```

---

# Extra Challenge

Update this example so that it dispatches an action when _both_ of the endpoints have completed

---

<Timer />

```js
const receiveAllScores = () => ({
  type: "RECEIVE_ALL_SCORES",
});

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {async(dispatch(receiveAllScores))
    // Dispatch `receiveAllScores` after BOTH fetches have completed

    fetch("/hockey").then((scores) => {
      .then(res=>res.json())
      .then(scores=>{
        dispatch(receiveHockeyScores(scores));
      })

    });

    fetch("/baseball").then((scores) => {
      .then(res=>res.json())
      .then(scores=>{dispatch(receiveBaseballScores(scores));})

    });
    .then((=>{
      dispatch(receiveAllData())
    }))
  }, []);

  return <Scores />;
};

```

const receiveAllScores = () => ({
type: "RECEIVE_ALL_SCORES",
});

const App = () => {
const dispatch = useDispatch();

React.useEffect(() => {async(dispatch(receiveAllScores))
// Dispatch `receiveAllScores` after BOTH fetches have completed
let hockeyData,baseballData={}
const hockeyPromise = fetch(./hockey)
.then(res=>res.json())
.then(scores=>{
dispatch(receiveHockey(scores))
})
const baseballPromise = fetch(./hockey)
.then(res=>res.json())

    .then(scores=>{
      dispatch(receiveBaseBallScores(scores))
    })
    Promise.all([hockeyPromise,baseballPromise])
    .then((=>dispatch(receiveAllScores())))

}, []);

return <Scores />;
};

```

```
