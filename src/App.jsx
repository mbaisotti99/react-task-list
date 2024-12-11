import tasks from "../tasks"

function App() {
  const completed = tasks.filter((curItem) => curItem.state === "completed")
  const inProg = tasks.filter((curItem) => curItem.state === "in_progress" || curItem.state === "backlog")

  


  const input = (arr) => {
    return arr.map((cur, index) => {
      let state 
      if (cur.state === "completed"){
        state = "status-comp"
      } else if (cur.state === "in_progress"){
        state = "status-progress"
      } else if (cur.state === "backlog"){
        state = "status-backlog"
      }
      return (
        <li key={index} className="listItem">

          <div className="innerCont">
            <p>{cur.title}</p>
          </div>

          <div className="innerCont">
            <p>Priorità: {cur.priority}</p>
          </div>

          <div className="innerCont">
            <p>Tempo Stimato: {cur.estimatedTime}</p>
          </div>

          <div className="innerCont">
            <div className={state}>{cur.state}</div>
          </div>

        </li>
        )
    })
  }

  console.log(input(completed));
  console.log(input(inProg));
  return (
    <>
      <h2>Task Completate</h2>
      <ul>
        {input(completed)}
      </ul>
      <h2>Task in Progress</h2>
      <ul>
        {input(inProg)}
      </ul>
    </>
  )

}

export default App