import React from "react";



export class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            date_added: "",
            author: ""
        }
    }


    componentDidMount() {
        const formData = new FormData();
        formData.append("id",this.props.match.params.id);
        fetch("http://ku4keee.beget.tech/php/getPost.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                    title: result.title,
                    text: result.text,
                    date_added: result.date_added,
                    author: result.author
                })
            })
    }

    render() {
        return <div>
            <h1 className="text-center">{this.state.title}</h1>
                <p>{this.state.text}</p>
                <p>Добавлено: {this.state.date_added}</p>
                <p>Автор: {this.state.author}</p>
        </div>
    }
}