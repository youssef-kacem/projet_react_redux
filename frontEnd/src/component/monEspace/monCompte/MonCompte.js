import React from 'react';
import { connect } from 'react-redux';
import { loadUser, editProfil } from '../../../actions/AuthActions'
import './MonCompteStyle.css'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBInputGroup, MDBIcon, MDBFormInline } from 'mdbreact';
import { addName } from '../../../actions/ProfileActions';

class FormsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += ' was-validated';
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addNewName = () => {
        this.props.add({ ...this.state.name })
        this.setState({ name: '' })
    }
    languageHandler = e => {
        if(e.target.checked){
            this.setState({languages: [...this.state.languages, e.target.name]})
        }else{
            this.setState({languages: this.state.languages.filter(el => el !== e.target.name)})
        }
    }
    componentDidMount() {
        this.props.loadUser()
    }
    
    componentWillReceiveProps(nextProps){
        this.setState(nextProps.auth.user)
    }
    render() {
        return (

            <div>
                {/* <div className="backgroundImg">
                    <div className="conteneur">
                        <h2 className="fontW">Mon Espace a Mon Services !</h2>
                    </div>
                </div> */}

                <div className="containerrr">
                    <form
                        className='needs-validation'
                        onSubmit={this.submitHandler}
                        noValidate
                    >


                        <MDBRow>

                            <MDBCol md="12" className="hr " >

                                <div className="form-group d-flex justify-content-center flex-column align-items-center"><div className="label-row">
                                    <label>Photo de profil</label></div>
                                    <div className="uploadbox-with-button  d-flex">
                                        <img style={{borderRadius: "50%", width: "200px"}} src={this.state.profilImg ? this.state.profilImg : "https://www.joyonlineschool.com/static/emptyuserphoto.png"} />

                                        {this.state.show ? <div className="input-group  align-self-center">

                                                <MDBInput
                                                    onChange={this.changeHandler}
                                                    className="ml-2"
                                                    type='text'
                                                    id='materialFormRegisterPasswordEx6'
                                                    name='profilImg'
                                                    label='Img Url'
                                                    outline
                                                    required
                                                />
                                        </div> : null}


                                    </div>
                                        <button className="btn btn-primary p-2" onClick={(e) => {
                                            e.preventDefault()
                                            this.setState({show: !this.state.show})}}>Change Profil Image</button>
                                </div>

                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='user'
                                    value={this.state.name}
                                    name='name'
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterNameEx'
                                    label='PRÉNOM'
                                    outline
                                    required
                                // onChange={this.addNewName}
                                >
                                    <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                </MDBInput>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='address-card'
                                    value={this.state.lastname}
                                    name='lastname'
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterEmailEx2'
                                    label='NOM DE FAMILLE'
                                    outline
                                    required
                                >
                                    <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                </MDBInput>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='envelope-open'
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                    type='email'
                                    id='materialFormRegisterConfirmEx3'
                                    name='email'
                                    label='Mon Email address'
                                    outline
                                    required
                                >
                                    <small id='emailHelp' className='form-text text-muted'>
                                        Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
                              </small>
                                </MDBInput>
                            </MDBCol>

                        </MDBRow>


                        <MDBRow>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='city'
                                    value={this.state.adress}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx4'
                                    name='adress'
                                    label='VILLE'
                                    outline
                                    required
                                >
                                    <div className='invalid-feedback ml-3 pl-3'>
                                        Veuillez fournir une ville valide.
                                </div>
                                    <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                </MDBInput>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='map-marked-alt'
                                    value={this.state.region}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx5'
                                    name='region'
                                    label='RÉGION'
                                    outline
                                    required
                                >
                                    <div className='invalid-feedback ml-3 pl-3'>
                                        Veuillez fournir un état valide.
                                </div>
                                    <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                </MDBInput>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='location-arrow'
                                    value={this.state.zipCode}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx6'
                                    name='zipCode'
                                    label='code postal'
                                    outline
                                    required
                                >
                                    <div className='invalid-feedback ml-3 pl-3'>
                                        Veuillez fournir un code postal valide.
                               </div>
                                    <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                </MDBInput>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='phone-alt'
                                    value={this.state.PhoneNumber}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx7'
                                    name='PhoneNumber'
                                    label='Numéro de téléphone'
                                    outline
                                    required
                                >
                                    <div className='invalid-feedback ml-3 pl-3'>
                                        Veuillez fournir un code postal valide.
                               </div>
                                    <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                </MDBInput>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput
                                    icon='globe-africa'
                                    value={this.state.website}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx8'
                                    name='website'
                                    label='Site Web'
                                    outline
                                    required
                                >
                                    <div className='invalid-feedback ml-3 pl-3'>
                                        Veuillez fournir un site web valide.
                               </div>
                                    <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                </MDBInput>
                            </MDBCol>

                            <MDBCol md='4'>
                                <label id="pl" >Année de naissance</label>
                                <div className="d-flex">
                                    <MDBIcon id="fs" icon="birthday-cake" />
                                    <MDBInputGroup
                                        value={this.state.year}

                                        id='materialFormRegisterPasswordEx9'
                                        name='year '
                                        outline
                                        required
                                        containerClassName="mb-3"
                                        inputs={
                                            <select onChange={this.changeHandler} className="form-control h" name="year" id="birth_date">
                                                <option className="bs-title-option" value="">Année de naissance</option>
                                                <option value="">&nbsp;</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>
                                                <option value="1989">1989</option>
                                                <option value="1988">1988</option>
                                                <option value="1987">1987</option>
                                                <option value="1986">1986</option>
                                                <option value="1985">1985</option>
                                                <option value="1984">1984</option>
                                                <option value="1983">1983</option>
                                                <option value="1982">1982</option>
                                                <option value="1981">1981</option>
                                                <option value="1980">1980</option>
                                                <option value="1979">1979</option>
                                                <option value="1978">1978</option>
                                                <option value="1977">1977</option>
                                                <option value="1976">1976</option>
                                                <option value="1975">1975</option>
                                                <option value="1974">1974</option>
                                                <option value="1973">1973</option>
                                                <option value="1972">1972</option>
                                                <option value="1971">1971</option>
                                                <option value="1970">1970</option>
                                                <option value="1969">1969</option>
                                                <option value="1968">1968</option>
                                                <option value="1967">1967</option>
                                                <option value="1966">1966</option>
                                                <option value="1965">1965</option>
                                                <option value="1964">1964</option>
                                                <option value="1963">1963</option>
                                                <option value="1962">1962</option>
                                                <option value="1961">1961</option>
                                                <option value="1960">1960</option>
                                                <option value="1959">1959</option>
                                                <option value="1958">1958</option>
                                                <option value="1957">1957</option>
                                                <option value="1956">1956</option>
                                                <option value="1955">1955</option>
                                                <option value="1954">1954</option>
                                                <option value="1953">1953</option>
                                                <option value="1952">1952</option>
                                                <option value="1951">1951</option>
                                                <option value="1950">1950</option>
                                                <option value="1949">1949</option>
                                                <option value="1948">1948</option>
                                                <option value="1947">1947</option>
                                                <option value="1946">1946</option>
                                                <option value="1945">1945</option>
                                                <option value="1944">1944</option>
                                                <option value="1943">1943</option>
                                                <option value="1942">1942</option>
                                                <option value="1941">1941</option>
                                                <option value="1940">1940</option>
                                                <option value="1939">1939</option>
                                                <option value="1938">1938</option>
                                                <option value="1937">1937</option>
                                                <option value="1936">1936</option>
                                                <option value="1935">1935</option>
                                                <option value="1934">1934</option>
                                                <option value="1933">1933</option>
                                                <option value="1932">1932</option>
                                                <option value="1931">1931</option>
                                                <option value="1930">1930</option>
                                                <option value="1929">1929</option>
                                                <option value="1928">1928</option>
                                                <option value="1927">1927</option>
                                                <option value="1926">1926</option>
                                                <option value="1925">1925</option>
                                                <option value="1924">1924</option>
                                                <option value="1923">1923</option>
                                                <option value="1922">1922</option>
                                                <option value="1921">1921</option>
                                                <option value="1920">1920</option>
                                                <option value="1919">1919</option>
                                                <option value="1918">1918</option>
                                                <option value="1917">1917</option>
                                                <option value="1916">1916</option>
                                                <option value="1915">1915</option>
                                                <option value="1914">1914</option>
                                                <option value="1913">1913</option>
                                                <option value="1912">1912</option>
                                                <option value="1911">1911</option>
                                                <option value="1910">1910</option>
                                                <option value="1909">1909</option>
                                                <option value="1908">1908</option>
                                                <option value="1907">1907</option>
                                                <option value="1906">1906</option>
                                                <option value="1905">1905</option>
                                                <option value="1904">1904</option>
                                                <option value="1903">1903</option>
                                                <option value="1902">1902</option>
                                                <option value="1901">1901</option>
                                            </select>
                                        }
                                    >
                                        <div className='invalid-feedback ml-3 pl-3'>
                                            Veuillez fournir un Année de naissance.
                                     </div>
                                        <div className='valid-feedback ml-3 pl-3'>Cela semble bon!</div>
                                    </MDBInputGroup>
                                </div>
                            </MDBCol>

                            <MDBCol className="hr">

                                <label>Langues parlées</label>
                                <p class="legend">Je parle :</p>

                                <MDBFormInline>
                                    <span class="lang lang-fr"></span>
                                    <MDBInput
                                        onChange={this.languageHandler}
                                        name= "Français"
                                        label='Français'
                                        filled
                                        type='checkbox'
                                        id='checkbox1'
                                        containerClass='mr-5'
                                    />
                                    <span class="lang lang-en"></span>
                                    <MDBInput
                                        onChange={this.languageHandler}
                                        name= "English"
                                        label='English'
                                        filled
                                        type='checkbox'
                                        id='checkbox2'
                                        containerClass='mr-5'
                                    />
                                    <span class="lang lang-es"></span>
                                    <MDBInput
                                        onChange={this.languageHandler}
                                        name= "Español"
                                        label='Español'
                                        filled
                                        type='checkbox'
                                        id='checkbox3'
                                        containerClass='mr-5'
                                    />
                                    <span class="lang lang-it"></span>
                                    <MDBInput
                                        onChange={this.languageHandler}
                                        name= "Italiano"
                                        label='Italiano '
                                        filled
                                        type='checkbox'
                                        id='checkbox3'
                                        containerClass='mr-5'
                                    />
                                    <span class="lang lang-ar"> </span>
                                    <MDBInput
                                        onChange={this.languageHandler}
                                        name= "عربي"
                                        label='عربي'
                                        filled
                                        type='checkbox'
                                        id='checkbox3'
                                        containerClass='mr-5'
                                    />
                                </MDBFormInline>

                            </MDBCol>

                        </MDBRow>


                        <MDBCol md='4' className='mb-3'>
                            <div className='custom-control custom-checkbox pl-3'>
                                <input
                                    className='custom-control-input'
                                    type='checkbox'
                                    value=''
                                    id='invalidCheck'
                                    required
                                />
                                <label className='custom-control-label' htmlFor='invalidCheck'>
                                    Accepter les termes et conditions
                            </label>
                                <div className='invalid-feedback'>
                                    Vous devez accepter avant de soumettre.
                               </div>
                            </div>
                        </MDBCol>


                        <MDBBtn className="po-bb" onClick={() => this.props.editProfil(this.state)} color='primary' type='submit'>
                            Soumettre le formulaire
                        </MDBBtn>


                    </form>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, {loadUser, editProfil})(FormsPage);



