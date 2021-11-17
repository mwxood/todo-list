import { Button, Input } from '@material-ui/core';
import Card from '../card/Card';
import './Create.css';

const Create = () => {
    return(
        <Card>
            <div className="d-flex">
                <Input className="full-width mr-1" />
                <Button variant="outlined">Create</Button>
            </div>
        </Card>
    )
}

export default Create;