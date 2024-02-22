//import Tabel from "../Components/Table"
import SortableTable from "../Components/SortableTable";

 function TabelPage(){

    const data=[
        {name:'Orange',color:'bg-orange-500',score: 5},
        {name:'Apple ',color:'bg-red-500',score: 3},
        {name:'Banana',color:'bg-yellow-500',score: 2},
        {name:'Lime',color:'bg-green-500',score: 5},
        {name:'Grapes',color:'bg-purple-500',score: 1},
    ];

    const config =[{label:'Names',
                     render:(fruit)=>fruit.name,
                     sortableVaue:(fruit)=>fruit.name,
                    },
                    {label:'Color',
                    render:(fruit)=> <div className={`p-3 m-3 ${fruit.color}`}></div>,
                    
                     },
                    {label:'Score',
                    render:(fruit)=>fruit.score,
                     sortableVaue:(fruit)=>fruit.score,
                     }]



    return <div>
        <SortableTable data={data} config={config}/>
    </div>
 }
 export default TabelPage;  