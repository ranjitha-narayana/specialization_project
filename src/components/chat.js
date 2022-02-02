import React, { useEffect } from 'react';

import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
function Chat() {

    useEffect(() => {

        addResponseMessage(`How Can i help you `);

    }, []);



    const handleNewUserMessage = (newMessage) => {

        console.log(`New message incoming! ${newMessage}`);

        // Now send the message throught the backend API

    };
    return (


        <div className="container-xl">
            <div className="pay row">
                <div className="col-md-6 ">
                    <div className="contact-form ">
                        <h2> Contact Us </h2>
                        <p className="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>
                        <form action="/examples/actions/confirmation.php" method="post">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="inputFirstName">First Name</label>
                                        <input type="text" className="form-control" id="inputFirstName" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="inputLastName">Last Name</label>
                                        <input type="text" className="form-control" id="inputLastName" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email Address</label>
                                <input type="email" className="form-control" id="inputEmail" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputMessage">Message</label>
                                <textarea className="form-control" id="inputMessage" rows={5} required defaultValue={""} />
                            </div>
                            <input type="submit" onClick={() => { alert("Submitted  successfully") }} className="btn btn-primary" defaultValue="Submit" />
                        </form>
                    </div>
                </div>

                <div className='col-md-3'>
                    <img src='https://png.pngtree.com/png-clipart/20201123/ourlarge/pngtree-d-small-person-standing-next-to-a-question-mark-and-thinking-png-image_2461791.jpg'>

                    </img>
                </div>
            </div>

            <Widget

                handleNewUserMessage={handleNewUserMessage}

                //   profileAvatar={logo}

                title="Support "

                subtitle="Wait for Reply"

            />
        </div>



    );

}

export default Chat;