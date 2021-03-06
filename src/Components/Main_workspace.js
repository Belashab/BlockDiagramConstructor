import React, { useState } from 'react';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import './Main_workspace.css'
import { Button } from 'beautiful-react-ui';


const initialSchema = createSchema({
  nodes: [
    {
      id: 'node-1',
      content: 'start',
      coordinates: [150, 60],
      outputs: [ { id: 'port-1', alignment: 'right' } ],
    },
  ]
});





const CustomRender = ({ id, content, data, inputs, outputs}) => (
    <div style={{background: `${data.backgroundc}`}}>
      {/* <div style={{textAlign: 'right'}}>
        <Button icon="times" size="small" onClick={()=>data.onClick(id)}/>
      </div> */}
      <div role="button" style={{padding: '15px'}}>
        {content}
      </div>
      <div style={{marginTop: '10px', display:'flex', justifyContent:'space-between'}}>
        {inputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
        {outputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
      </div>
    </div>
);

const UncontrolledDiagram = (props) => {
  // + removeNode если его заставить работать как надо
  const [schema, { onChange, addNode }] = useSchema(initialSchema);
  let [backgroundcolor, setbackgroundcolor] = useState("grey")
  let [nodeName, setNodeName] = useState(`Unnamed node`)



  function changeHandler (e) {
    setbackgroundcolor(backgroundcolor = e.target.value)
  }

  // function ResetSchema (e) {
    
  // }




  function NodeNameInput() {
    return(
    <form>
      <label>
        New Node Name:
        <input value = {nodeName} onChange = {e => setNodeName(e.target.value)} className = "textarea" autoFocus/>
      </label>
    </form>
    );
  }

  // const deleteNodeFromSchema = (id) => {
  //   const nodeToRemove = schema.nodes.find(node => node.id === id);
  //   removeNode(nodeToRemove);
  // };

  const addNewNode = () => {
    const nextNode = {
        id: `node-${schema.nodes.length + 1}`,
        content: `${nodeName}`,
        coordinates: [
         150,
         60,
        ],
        render: CustomRender,
        inputs: [{ id: `port-${Math.random()}`}],
        outputs: [{ id: `port-${Math.random()}`}],
        //В дату можно передать любую переменную, которая может понадобиться при рендере
        data: {
          backgroundc: backgroundcolor,
          // onClick: deleteNodeFromSchema
        }
   };
   
   addNode(nextNode);
  }

  return (
    <>
      <NodeNameInput />
      <form>
          <label>
            New node colour:
              <select onChange = {changeHandler}>
                  <option value = "grey" >grey</option>
                  <option value = 'purple' >purple</option>
                  <option value = "yellow" >yellow</option>
                  <option value = "green" >green</option>
                  <option value = "blue" >blue</option>
              </select>
          </label>
      </form>
      {/* <button onClick = {resetSchema}>Reset schema</button> */}
      <div style={{ height: '80vh', width: '95vw', zindex: 0}}>
        <Button color="primary" icon="plus" onClick={addNewNode}>Add new node</Button>
        <Diagram schema={schema} onChange={onChange} />
      </div>
    </>
  );
};

function Main_workspace (props) {
    return (
        <div>
            <UncontrolledDiagram />
        </div>
    )
}


export default Main_workspace