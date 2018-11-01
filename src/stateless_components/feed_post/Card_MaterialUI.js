import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Modal from '../ItemClickModal/ItemClickModal'
import './Card.css'


const CardExampleCardProps = (props) => {


    return(
        <Modal img={props.img} header={props.header} info={props.info} extraInfo={props.extraInfo}>
            <Card onClick={props.click}>
                {/*props.click is not working... it is just there when hovering over card , it converts to hover mouse button*/}
                <Image src={props.img}/>
                <Card.Content>
                    <Card.Header>{props.header}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.timeStamp}</span>
                    </Card.Meta>
                    <Card.Description >{props.info}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {/*<a href="foo">*/}
                        {/*<Icon name='user'/>*/}
                        {/*22 Friends*/}
                    {/*</a>*/}
                </Card.Content>
            </Card>
        </Modal>
    )
}


export default CardExampleCardProps