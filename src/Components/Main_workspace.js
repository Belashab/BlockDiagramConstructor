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
  const [schema, { onChange, addNode }] = useSchema(initialSchema);
  let [backgroundcolor, setbackgroundcolor] = useState("purple")
  let [nodeName, setNodeName] = useState(`Unnamed node`)
  function changeHandler (e) {
    setbackgroundcolor(backgroundcolor = e.target.value)
    console.log(backgroundcolor)
  }

  function nodeNameInputHandler (e) {
    setNodeName(e.target.value)
  }

  function NodeNameInput() {
    return(
    <form>
      <label>
        New Node Name:
        <textarea value = {nodeName} onChange = {nodeNameInputHandler} />
      </label>
    </form>
    );
  }

  // const deleteNodeFromSchema = (id) => {
  //   const nodeToRemove = schema.nodes.find(node => node.id == id);
  //   removeNode(nodeToRemove);
  // };

  const addNewNode = () => {
    let nextNode = {
        id: `${schema.nodes.length + 1}`,
        content: `${nodeName}`,
        coordinates: [
         schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
         schema.nodes[schema.nodes.length - 1].coordinates[1],
        ],
        render: CustomRender,
        inputs: [{ id: `port-${Math.random()}`, aligment: 'top'}],
        outputs: [{ id: `port-${Math.random()}`}],
        //В дату можно передать любую переменную, которая может понадобиться при рендере
        data: {
          backgroundc: backgroundcolor
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
                  <option value = 'purple' >purple</option>
                  <option value = "yellow" >yellow</option>
                  <option value = "green" >green</option>
                  <option value = "blue" >blue</option>
              </select>
          </label>
      </form>

      <div style={{ height: '22.5rem' }}>
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