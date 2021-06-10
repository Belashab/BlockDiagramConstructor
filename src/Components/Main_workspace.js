import React, { useState, useRef } from 'react';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import './Main_workspace.css'
import { Button } from 'beautiful-react-ui';

// function EditForm (props) {
//   let [backgroundcolor, setbackgroundcolor] = useState("purple")
//   function changeHandler (e) {
//     setbackgroundcolor(backgroundcolor = e.target.value)
//     console.log(backgroundcolor)
//   }

//   const current_background_color = useRef(backgroundcolor)

//   return (
//     <>
//         <form>
//             <label>
//                 <select onChange = {changeHandler}>
//                     <option value = "purple" >purple</option>
//                     <option value = "yellow" >yellow</option>
//                     <option value = "green" >green</option>
//                     <option value = "blue" >blue</option>
//                 </select>
//             </label>
//         </form>
//     </>
//   )
// }


const initialSchema = createSchema({
  nodes: [
    {
      id: 'node-1',
      content: 'Node 1',
      coordinates: [150, 60],
      outputs: [ { id: 'port-1', alignment: 'right' } ],
    },
  ]
});

const CustomRender = ({ id, content, data, inputs, outputs , background}) => (
    <div style={{background: ` ' ${background} ' `}}>
      {/* <div style={{textAlign: 'right'}}>
        <Button icon="times" size="small" onClick={()=>data.onClick(id)}/>
      </div> */}
      <div role="button" style={{padding: '15px'}}>
        {content}
      </div>
      <div style={{marginTop: '10px',display:'flex', justifyContent:'space-between'}}>
        {inputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
        {outputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
      </div>
    </div>
);

const UncontrolledDiagram = (props) => {
  const [schema, { onChange, addNode }] = useSchema(initialSchema);
  let [backgroundcolor, setbackgroundcolor] = useState("purple")
  function changeHandler (e) {
    setbackgroundcolor(backgroundcolor = e.target.value)
    console.log(backgroundcolor)
  }

  // const deleteNodeFromSchema = (id) => {
  //   const nodeToRemove = schema.nodes.find(node => node.id == id);
  //   removeNode(nodeToRemove);
  // };

  const addNewNode = () => {
    const nextNode = {
       id: `node-${schema.nodes.length+1}`,
       content: `Node ${schema.nodes.length+1}`,
       coordinates: [
         schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
         schema.nodes[schema.nodes.length - 1].coordinates[1],
       ],
       background: `${backgroundcolor}`,
       render: CustomRender,
      inputs: [{ id: `port-${Math.random()}`}],
      outputs: [{ id: `port-${Math.random()}`}],
   };
   
   addNode(nextNode);
  }

  return (
    <>
      <form>
          <label>
              <select onChange = {changeHandler}>
                  <option value = "purple" >purple</option>
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