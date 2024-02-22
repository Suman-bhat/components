import classNames from "classnames"
function Pannel({children,className,...rest}){
    const finalClassNames =classNames('border rounded p-3 bg-white w-full',className);
    return <div {...rest} className={finalClassNames}>{children}</div>
}
export default Pannel;