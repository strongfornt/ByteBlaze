import {PropagateLoader} from 'react-spinners'

export default function Spinner() {
  return (
    <>
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <PropagateLoader   color='#800080' />

        </div>
    </>
  )
}
