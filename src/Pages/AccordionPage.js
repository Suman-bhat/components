import Accordion from "../Components/Accordion";

function AccordionPage(){
    const items=[
        {
            label:'Learn React JS',
            Content:'React is a wonderfull javascript frame work easy understanding ad usage..React is a wonderfull javascript frame work easy understanding ad usage..React is a wonderfull javascript frame work easy understanding ad usage'
        },
        {
            label:'Learn CSS',
            Content:'CSS is important can be named as backbone of every frontend end project, this gives a visual experiance..React is a wonderfull javascript frame work easy understanding ad usage..React is a wonderfull javascript frame work easy understanding ad usage'
        },
        {
            label:'Learn HTML',
            Content:'HTML can be named as buliding block of front end projects helps in displaying content on the screen with proper layout..React is a wonderfull javascript frame work easy understanding ad usage..React is a wonderfull javascript frame work easy understanding ad usage'
        }
    ]
 

    return <div>
        <Accordion items={items}/>
    </div>
}
export default AccordionPage;