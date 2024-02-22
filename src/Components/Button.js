import classNames from "classnames";
import { twMerge } from 'tailwind-merge';
function Button ({children,primary,secondary,success,danger,rounded,outline,warning, ...rest}){
  
    const classes =twMerge(classNames( rest.className,' flex items-center px-3 py-1.5 border ' ,{
        'border-blue-700 bg-blue-500 text-white':primary,
        'border-gray-700 bg-gray-500 text-white':secondary,
        'border-orange-700 bg-orange-500 text-white':warning,
        'border-red-700 bg-red-500 text-white':danger,
        'border-green-700 bg-green-700 text-white':success,
        'rounded-full':rounded,
        'bg-white':outline,
        'bg-blue-500 ': outline &&primary,
        ' text-gray-500':outline && secondary,
        ' text-orange-700':outline && warning,
        'text-red-700': outline && danger,
        ' text-green-700 ':outline && success,       
    }))

    return<button {...rest}className={classes}>{children}</button>
}

Button.prototype ={
    heckValue:({primary,
        secondary,
        warning,
        danger,success})=>{
        const count =Number(!!primary)+Number(!!secondary)+Number(!!warning)+Number(!!danger)+Number(!!success)
        if (count>1)
        return new Error('only one type is allowed');
    }

}



export default Button;