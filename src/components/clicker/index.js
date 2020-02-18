import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ClickableImage extends React.Component{
    state = {
        count: 0
    };
    // A thank you to:
    // https://wsvincent.com/react-counter
    click = () => {
        this.setState((prevState, {count}) => ({
            count: prevState.count + 1
        }));
    };
    render() {
        const useStyles = {
            root: {
                minWidth: 275,
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        };


        return(
            <Card className={useStyles.root} onClick={this.click}>
                <CardContent>
                    <img src={require('../../images/murdermart.png')} alt="murdermart"/>
                    <div> { this.state.count } </div>
                </CardContent>
            </Card>
        )
    }
}



export default ClickableImage;