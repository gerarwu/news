import React from 'react'

import New from './New'
import Preview from '../Preview/Preview';
import {useBody} from '../../utils/dom'
import useRenderCount from '../../utils/useRenderCount'

const News = ({news}) => {
    useRenderCount('News')
    const [newSelected, setNewSelected] = React.useState()
    const body = useBody()


    React.useEffect(() => {
        if(newSelected){
           body.className ='overFlowHidden'
        }else{
            body.className = ''
        }
    }, [newSelected])

    const selected = React.useCallback((content) => {
        setNewSelected(content)
    }, [])


    return <div className="News General-grid">
        { news.map((n, i) => <New key={i} content={n} onclicked={selected} />) }
        { newSelected && <Preview new={newSelected} clickedClosePreview={() => setNewSelected(null)} /> }
    </div>

}

export default React.memo(News)