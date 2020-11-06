import React, {Component} from 'react';
import  {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer/footer';
import NavBarAll from '../components/header/navbarall'
import '../App.css';
import './Accueil/Home.css'
import ReactHtmlParser from 'react-html-parser'; 


class MentionLegal extends Component{

   

    render(){
        var mention_legal='<h1 dir="ltr" style="line-height:1.2;text-align: center;margin-top:14pt;margin-bottom:0pt;"><span style="font-size:16pt;font-family:arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">MENTIONS L&Eacute;GALES</span></h1>'+
        '<h1 dir="ltr" style="line-height:1.2;margin-top:14pt;margin-bottom:0pt;"><span style="font-size:16pt;font-family:arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Editeur du site :&nbsp;</span></h1>'+
        '<p dir="ltr" style="line-height:1.38;margin-top:10pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">L&#39;&eacute;dition du site ________________ est assur&eacute;e par la Soci&eacute;t&eacute; ________________ ________________ au capital de ________________ euros, immatricul&eacute;e au RCS de ________________ sous le num&eacute;ro ________________, dont le si&egrave;ge social est situ&eacute; au ________________</span></p>'+
        '<p dir="ltr" style="line-height:1.38;margin-top:10pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Num&eacute;ro de t&eacute;l&eacute;phone ________________</span></p>'+
        '<p dir="ltr" style="line-height:1.38;margin-top:10pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Adresse e-mail : ________________.</span></p>'+
        '<p dir="ltr" style="line-height:1.38;margin-top:10pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Le Directeur de la publication est : ________________</span></p>'+
        '<p dir="ltr" style="line-height:1.2;margin-top:10pt;margin-bottom:0pt;"><span style="font-size:16pt;font-family:arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">H&eacute;bergement</span></p>'+
        '<p dir="ltr" style="line-height:1.38;margin-top:10pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">L&#39;h&eacute;bergeur du site ________________ est la soci&eacute;t&eacute; ________________, dont le si&egrave;ge social est situ&eacute; au ________________, avec le num&eacute;ro de t&eacute;l&eacute;phone : ________________.</span></p>'
    
         return (

                <div className='mentionLegal'>
                    <NavBarAll/>
                    <main className="wrapper">

                       {ReactHtmlParser(mention_legal)}
                         </main>
                    <Footer/>
                </div>
        )
    }
}
export default MentionLegal
