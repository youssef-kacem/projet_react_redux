import React, { Component } from 'react';
import './ContactStyle.css'

class Demandes extends Component {
    render() {
        return (
            <div>
                <div className="backgroundImg">
                    <div className="conteneur">
                        <h2 className="fontW">Contacter :</h2>
                    </div>
                </div>

                <div className="container mt">
                    <form action="/member/messages/contacter/19608" id="formToValidate" method="post" accept-charset="utf-8"><div style={{ display: "none" }}><input type="hidden" name="_method" value="POST" /></div>
                        <table id="table_form">
                            <tbody><tr>
                                <td className="llabel">Objet:	</td>
                                <td>
                                    <div className="input text"><input name="data[Message][objet]" className="form-control validate[required]" maxlength="150" type="text" id="MessageObjet" /></div>
                                </td>
                                <td></td>
                            </tr>
                                <tr>
                                    <td className="llabel">Message:	</td>
                                    <td>
                                        <textarea name="data[Message][message]" cols="90" rows="7" className="form-control validate[required]" id="MessageMessage"></textarea>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr><td>&nbsp;</td><td></td><td></td></tr>
                                <tr><td></td><td><div className="submit"><input className="btn btn-primary" type="submit" value="Envoyer" /></div>

                                </td>
                                </tr>
                            </tbody></table>
                    </form>

                </div>

            </div>
        );
    }
}

export default Demandes;