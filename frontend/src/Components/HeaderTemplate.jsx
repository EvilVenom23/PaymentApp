export const HeaderTemplate = (props) => {
  return <div>
    <div className="font-bold text-4xl pt-6"> {props.heading}</div>
    <div className="text-slate-500 text-md pt-1 px-4 pb-4"> {props.subheading} </div>

    </div>
  
}
