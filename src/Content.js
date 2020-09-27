import React from "react";

export default class extends React.Component 
{
  constructor(props) {
    super(props);
  this.state = {
      name: "",
      friendname: "",
      email: "",
      content: "",
    };
  }
handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
this.setState({ [name]: value });
  }

  sendMessage(event) {
    event.preventDefault();
if (!this.validateMail()) {
      return;
    }
const templateParams = {
      from_name: this.state.name,
      to_name: this.state.friendname + " (" + this.state.email + ")",
      content: this.state.content
    };
emailjs
      .send("gmail", "portfoliositecontact", templateParams, {itemplate_gqmhoob})
      .then(
        function(response) {
          toast.success("Your message has successfully sent!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          toast.error("Your message was not able to be sent");
        }
      );
this.setState({
      name: "",
      friendname: "",
      email: "",
      content: ""
    });
  }



  render() {
    return (
      <div>
        <form className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >

        <textarea
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your name"
            required
            value={this.state.name}
            style={{ width: "100%" }}
            rows={1}
          />

          <textarea
            id="friendname"
            name="friendname"
            onChange={this.handleInputChange.bind(this)}
            placeholder="your friend's name"
            required
            value={this.state.friendname}
            style={{ width: "100%" }}
            rows={1}
          />

        <textarea 
            id="content"
            name="content"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Feel free to add links to cute dog videos too.."
            required
            value={this.state.content}
            style={{ width: "100%", height: "250px" }}
            rows={1}>
          </textarea>
        <br/>
        <input 
            id="email"
            name="email"
            type = "text" 
            onChange={this.handleInputChange.bind(this)}
            placeholder = "Your friend's email id" 
            value={this.state.email}
            error={this.state.errors.email}
            style={{ width: "100%" }}
            rows={1}
        />
        <ul></ul>
        <input 
            type = "button" 
            value = "Send"
            className="ui button"
            style={{
              fontFamily: "Amatic SC",
              fontSize: "20px",
              color: "blue"
            }}
            onClick={this.sendMessage.bind(this)}
            />
        </form>
    </div>
    );
  };
  
}