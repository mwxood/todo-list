import Card from "../card/Card";
import { Button } from '@material-ui/core';
import './Items.css'
const Read = (props) => {
  

    const items = props.list.map((item) => {
        return(
            <Card key={item.id} className="card-item">
                <div className="item-holder">
                    <div className="item">
                        {`#${item.id}`}
                    </div>

                    <div className="item">
                        {item.title}
                    </div>

                    <Button variant="contained" className="danger">Delete</Button>
               </div>
            </Card>
        )
    })


    return(
       <div className="card-wrap d-flex flex-wrap">
           {items}
        </div>
    )
}

export default Read;