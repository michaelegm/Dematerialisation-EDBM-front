import React, {Component} from 'react';
import  {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer/footer';
import NavBarAll from '../components/header/navbarall'
import '../App.css';
import './Accueil/Home.css'
import preval from 'preval.macro';
import ReactHtmlParser from 'react-html-parser';


class CGU extends Component{


    render(){

       /* const components = preval
        const fs = require('fs');
        const files = fs.readdirSync('..cgu/cgu.txt');*/
  //module.exports = files;
        var cgu='\n' +
            '<h2>1 - OBJET DU DOCUMENT</h2>\n' +
            '<p>Le pr&eacute;sent document a pour objet de d&eacute;finir les conditions g&eacute;n&eacute;rales d&rsquo;utilisation du t&eacute;l&eacute;service EDBM-GU, d&eacute;nomm&eacute; &laquo; Service &raquo; ci-apr&egrave;s, entre le service &agrave; comp&eacute;tence nationale EDBM-GU et les usagers (ci-apr&egrave;s d&eacute;nomm&eacute; &laquo; Utilisateurs &raquo;) .</p>\n' +
            '\n' +
            '<p>Le service &agrave; comp&eacute;tence nationale EDBM-GU est plac&eacute; sous l&rsquo;autorit&eacute; de EDBM-GU, Rattach&eacute; &agrave; la Pr&eacute;sidence de la R&eacute;publique</p>\n' +
            '\n' +
            '<h2>2 - D&Eacute;FINITION ET OBJET DU SERVICE</h2>\n' +
            '<h3>2.1 D&Eacute;FINITION</h3>\n' +
            '<p>Le Service mis en &oelig;uvre par le service &agrave; comp&eacute;tence nationale EDBM-GU (ci-apr&egrave;s d&eacute;nomm&eacute; &laquo; le service EDBM-GU&raquo;) contribue &agrave; simplifier les d&eacute;marches li&eacute;es &agrave; la cr&eacute;ation, aux modifications de la situation et &agrave; la cessation d&rsquo;activit&eacute; d&rsquo;une entreprise des usagers fran&ccedil;ais et europ&eacute;ens.</p>\n' +
            '\n' +
            '<p>L&rsquo;utilisation du Service est facultative et gratuite. Toutefois, dans le cadre des formalit&eacute;s effectu&eacute;es via ce Service, comme celles de la cr&eacute;ation d&rsquo;entreprise, des paiements en ligne peuvent &ecirc;tre demand&eacute;s. Ceux-ci sont s&eacute;curis&eacute;s.</p>\n' +
            '\n' +
            '<p>L&rsquo;ensemble des destinataires du Service sont d&eacute;nomm&eacute;es ci-apr&egrave;s les organismes partenaires.</p>\n' +
            '\n' +
            '<p>Les donn&eacute;es recueillies sont transmises aux fins de traitement aux organismes partenaires suivants :</p>\n' +
            '<ul>\n' +
            '\t<li>Les centres fiscaux g&egrave;rent les formalit&eacute;s pour la d&eacute;claration d&rsquo;activit&eacute; des entreprises et les enregistrement des actes associ&eacute;es &agrave; l&rsquo;immatriculation, la modification et la cessation d&rsquo;activit&eacute;</li>\n' +
            '\t<li>Les bureaux de l&rsquo;Institut Statistique (INSTAT) g&egrave;rent l&rsquo;immatriculation statistique des &eacute;tablissement cr&eacute;&eacute;s pour chaque entreprise</li>\n' +
            '\t<li>Les greffes des tribunaux de commerce ou des tribunaux de grande instance g&egrave;rent l&rsquo;attribution d&rsquo;identit&eacute; juridique pour les entreprises cr&eacute;&eacute;es</li>\n' +
            '\t<li>La Caisse Nationale de Pr&eacute;voyance Sociale (CNaPS) g&egrave;re l&rsquo;immatriculation des salari&eacute;s des entreprises cr&eacute;&eacute;es.</li>\n' +
            '</ul>\n' +
            '\n' +
            '<h3>2.2. FONCTIONNALIT&Eacute;S</h3>\n' +
            '\n' +
            '<p>Le Service permet &agrave; l\'Utilisateur :</p>\n' +
            '\n' +
            '<ul>\n' +
            '\t<li>d&rsquo;acc&eacute;der &agrave; la documentation pr&eacute;cisant les informations concernant les diff&eacute;rentes d&eacute;marches ainsi que les &eacute;l&eacute;ments constitutifs du dossier de d&eacute;claration</li>\n' +
            '\t<li>de cr&eacute;er un compte utilisateur donnant acc&egrave;s &agrave; un espace de stockage personnel. Cet espace permet &agrave; l&rsquo;usager de g&eacute;rer et utiliser ses donn&eacute;es &agrave; caract&egrave;re personnel, de conserver les informations le concernant et les documents et pi&egrave;ces justificatives qui lui sont n&eacute;cessaires pour l&rsquo;accomplissement des d&eacute;marches administratives.</li>\n' +
            '</ul>\n' +
            '<p>Depuis son espace, l&rsquo;Utilisateur peut :</p>\n' +
            '\n' +
            '<ul>\n' +
            '\t<li>constituer son dossier unique comprenant le dossier de d&eacute;claration</li>\n' +
            '\t<li>d\'&eacute;changer avec des conseillers pour obtenir un appui dans la constitution de son dossier ou des explications compl&eacute;mentaires</li>\n' +
            '\t<li>transmettre son dossier de d&eacute;claration aux entit&eacute;s comp&eacute;tentes ;</li>\n' +
            '\t<li>acc&eacute;der aux informations de suivi du traitement de son dossier de d&eacute;claration;</li>\n' +
            '\t<li>permettre aux organismes et autorit&eacute;s partenaires de mettre en &oelig;uvre les traitements n&eacute;cessaires &agrave; l&rsquo;exploitation des informations re&ccedil;ues de la personne morale : r&eacute;ception du dossier unique; transmission des informations de suivi du traitement des dossiers uniques &agrave; la personne morale.</li>\n' +
            '</ul>\n' +
            '\n' +
            '<h2>3 - ACCEPTATION DES CONDITIONS G&Eacute;N&Eacute;RALES</h2>\n' +
            '\n' +
            '<h3>3.1 INSCRIPTION</h3>\n' +
            '<p>En s\'inscrivant aux Services dans les conditions expos&eacute;es ci-dessous, les Utilisateurs d&eacute;clarent avoir pris connaissance des pr&eacute;sentes conditions g&eacute;n&eacute;rales et les accepter express&eacute;ment. Lors de l\'inscription sur le site via le Formulaire d&rsquo;inscription, chaque utilisateur accepte express&eacute;ment les pr&eacute;sentes CGU en cochant la case pr&eacute;c&eacute;dant le texte suivant : &laquo; Je reconnais avoir lu et compris les CGU et je les accepte &raquo;.</p>\n' +
            '\n' +
            '<h3>3.2 CONSTITUTION DE DOSSIER</h3>\n' +
            '\n' +
            '<p>L&rsquo;Utilisateur remplit en ligne son dossier et le valide en y joignant &eacute;ventuellement les pi&egrave;ces n&eacute;cessaires au traitement de ce dernier.</p>\n' +
            '<p>&Agrave; l&rsquo;issue de la constitution de son dossier, s&rsquo;affiche &agrave; l&rsquo;&eacute;cran un r&eacute;capitulatif des &eacute;l&eacute;ments renseign&eacute;s par l&rsquo;Utilisateur afin que celui-ci puisse les v&eacute;rifier et les confirmer. Apr&egrave;s confirmation, le dossier est transmis aux organismes partenaires. La confirmation et la transmission du formulaire par l\'Utilisateur vaut signature de celui-ci.</p>\n' +
            '<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales s&rsquo;imposent &agrave; tout Utilisateur du Service.</p>\n' +
            '\n' +
            '\n' +
            '\n' +
            '<h2>4 - ACC&Egrave;S AUX SERVICES</h2>\n' +
            '\n' +
            '<p>Les Services sont accessibles &agrave; toute personne physique ayant la pleine capacit&eacute; juridique pour contracter des engagements au titre des pr&eacute;sentes conditions g&eacute;n&eacute;rales. Les utilisateurs qui n\'ont pas la pleine capacit&eacute; juridique ne peuvent acc&eacute;der aux Services qu\'avec l\'accord de leur repr&eacute;sentant l&eacute;gal.</p>\n' +
            '\n' +
            '\n' +
            '<h2>5 - SERVICES GRATUITS</h2>\n' +
            '\n' +
            '<p>Les Services sont fournis gratuitement aux Utilisateurs, &eacute;tant entendu qu\'ils sont seuls responsables de tous les frais d\'acc&egrave;s &agrave; Internet et du co&ucirc;t de leurs communications (mat&eacute;riel informatique, logiciels, connexion Internet, etc.).</p>\n' +
            '\n' +
            '\n' +
            '<h2>6 - PR&Eacute;-INSCRIPTION AUX SERVICES</h2>\n' +
            '\n' +
            '<p>Certaines informations de la Plateforme sont librement accessibles au public sans inscription pr&eacute;alable, au libre choix de EDBM-GU, qui n\'est li&eacute;e par aucune obligation contractuelle envers les visiteurs ordinaires.</p>\n' +
            '\n' +
            '<p>Pour pouvoir acc&eacute;der aux Services, les Utilisateurs doivent ouvrir un compte sur la Plateforme. &Agrave; cette fin, les utilisateurs doivent s&rsquo;inscrire en remplissant le formulaire. En acceptant de s&rsquo;inscrire aux services r&eacute;serv&eacute;s, les Utilisateurs membres s&rsquo;engagent &agrave; fournir des informations sinc&egrave;res et exactes concernant son &eacute;tat civil et ses coordonn&eacute;es, notamment son adresse email.</p>\n' +
            '\n' +
            '<p>Pour acc&eacute;der aux services, les Utilisateurs doivent ensuite s\'identifier &agrave; l\'aide de leur identifiant et de leur mot de passe qui lui seront communiqu&eacute;s apr&egrave;s son inscription.</p>\n' +
            '\n' +
            '<p>Les Utilisateurs sont responsables du maintien de la confidentialit&eacute; de leur nom d\'utilisateur et de leur mot de passe et reconnaissent express&eacute;ment que toute utilisation des Services depuis leur compte sera r&eacute;put&eacute;e avoir &eacute;t&eacute; faite par eux. Dans l\'hypoth&egrave;se o&ugrave; les Utilisateurs constateraient que leur compte est ou a &eacute;t&eacute; utilis&eacute; &agrave; leur insu, ils s\'engagent &agrave; en informer EDBM-GU dans les meilleurs d&eacute;lais, &agrave; l\'adresse e-mail de contact mentionn&eacute;e &agrave; l\'article 2 des pr&eacute;sentes.</p>\n' +
            '\n' +
            '<p>L\'inscription aux Services entra&icirc;ne automatiquement l\'attribution aux Utilisateurs d\'un espace personnel sous la forme et selon les moyens techniques que EDBM-GU juge les plus appropri&eacute;s pour la r&eacute;alisation des Services, consistant notamment en une page web permettant &agrave; l\'Utilisateur d\'utiliser et de g&eacute;rer les Services (ci-apr&egrave;s &laquo;l\'Espace Personnel&raquo;).</p>\n' +
            '\n' +
            '<h2>7 - UTILISATION STRICTEMENT PERSONNELLE</h2>\n' +
            '\n' +
            '<p>Un seul compte peut &ecirc;tre cr&eacute;&eacute; par utilisateur. La personne dont les informations personnelles ont &eacute;t&eacute; communiqu&eacute;es &agrave; EDBM-GU pour ouvrir le Compte de l\'Utilisateur est consid&eacute;r&eacute;e comme l\'Utilisateur des Services, &agrave; l\'exclusion de tout autre tiers.</p>\n' +
            '\n' +
            '<p>Les Utilisateurs s\'engagent donc &agrave; utiliser personnellement les Services et &agrave; ne permettre &agrave; aucun tiers de les utiliser &agrave; leur place ou pour leur propre compte, sauf s\'il en assume l\'enti&egrave;re responsabilit&eacute;.</p>\n' +
            '\n' +
            '\n' +
            '<h2>8  - DESCRIPTION DES SERVICES</h2>\n' +
            '\n' +
            '<p>Les Utilisateurs ont acc&egrave;s aux Services suivants, sous une forme et selon les moyens techniques que EDBM-GU juge les plus appropri&eacute;s pour fournir les Services.</p>\n' +
            '\n' +
            '<h3>8.1 CR&Eacute;ATION DE PROFILS</h3>\n' +
            '<p>Les Utilisateurs ont la possibilit&eacute; de cr&eacute;er un profil (ci-apr&egrave;s le &laquo;Profil&raquo;) qu\'ils peuvent renseigner depuis leur Espace Personnel. Un profil permet aux utilisateurs d\'ins&eacute;rer des informations utiles automatiquement int&eacute;gr&eacute;es lors des d&eacute;marches. Pour ce faire, ils doivent d&eacute;terminer la cat&eacute;gorie qui correspond &agrave; leur activit&eacute; r&eacute;elle dans le cadre des d&eacute;marches : &ldquo;Associ&eacute;&rdquo;, &ldquo;Dirigeant&rdquo;, &ldquo;Mandataire&rdquo;.</p>\n' +
            '\n' +
            '<h3>8.2 PROC&Eacute;DURES EN LIGNE</h3>\n' +
            '<p>Les Utilisateurs auront la possibilit&eacute; lorsque EDBM-GU le jugera utile et selon les moyens qu\'il jugera les plus appropri&eacute;s pour fournir le Service, de lancer des proc&eacute;dures en ligne (ci-apr&egrave;s la &laquo;D&eacute;marche&raquo;) relatives &agrave;&nbsp; l&rsquo;immatriculation, la modification, et &agrave; la cessation d&rsquo;activit&eacute; d&rsquo;une entreprise. Ces proc&eacute;dures seront directement li&eacute;es &agrave; leur profil et identifi&eacute;es dans l&rsquo;Espace Personnel dans la rubrique &ldquo;D&eacute;marches en cours&rdquo;. En cas de validation d&rsquo;une D&eacute;marche par les entit&eacute;s concern&eacute;es, l&rsquo;entreprise (ci-apr&egrave;s la &laquo;Soci&eacute;t&eacute;&raquo;) ayant fait l&rsquo;objet de celle-ci est cr&eacute;&eacute;e dans la rubrique &ldquo;Mes Soci&eacute;t&eacute;s&rdquo; dans l&rsquo;Espace Personnel.</p>\n' +
            '\n' +
            '\n' +
            '<h3>8.3 DIFFUSION D\'INFORMATIONS ET PARTAGE D\'INFORMATIONS</h3>\n' +
            '\n' +
            '<p>Les Utilisateurs ont acc&egrave;s, depuis la Plateforme, &agrave; diverses informations que EDBM-GU met en ligne, ainsi qu\'&agrave; une base de donn&eacute;es de ressources libres, ouvertes et partag&eacute;es, aliment&eacute;e par EDBM-GU.</p>\n' +
            '<p>Les informations relatives &agrave; un Profil, une D&eacute;marche ou une Soci&eacute;t&eacute; dans toutes ses informations et interactions avec la Plateforme sont accessibles uniquement aux repr&eacute;sentants des diff&eacute;rentes entit&eacute;s impliqu&eacute;es dans les diff&eacute;rentes proc&eacute;dures engag&eacute;es par l&rsquo;Utilisateur dans le cadre d&rsquo;une D&eacute;marche. L&rsquo;acc&egrave;s des repr&eacute;sentants des entit&eacute;s ne permettent pas la modification des informations saisies par l&rsquo;Utilisateur.</p>\n' +
            '\n' +
            '\n' +
            '<h3>8.4 MESSAGERIE INTERNE</h3>\n' +
            '\n' +
            '<p>Les utilisateurs ont acc&egrave;s &agrave; la messagerie instantan&eacute;e en ligne, ce qui leur permet de maintenir une correspondance priv&eacute;e avec des accompagnateurs de la Plateforme.</p>\n' +
            '\n' +
            '<h3>8.5 AUTRES SERVICES</h3>\n' +
            '<p>EDBM-GU se r&eacute;serve le droit de proposer tout autre Service, sous une forme et selon les fonctionnalit&eacute;s et moyens techniques qu\'il jugera les plus appropri&eacute;s pour fournir lesdits Services.</p>\n' +
            '\n' +
            '\n' +
            '<h2>9 - DUR&Eacute;E</h2>\n' +
            '\n' +
            '<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales s\'appliquent pendant toute la dur&eacute;e de validit&eacute; du Compte de l\'Utilisateur, jusqu\'&agrave; la cl&ocirc;ture de ce dernier, dans les conditions d&eacute;taill&eacute;es ci-dessous dans l\'article &laquo;Cl&ocirc;ture du Compte&raquo;.</p>\n' +
            '\n' +
            '\n' +
            '<h2>10 - H&Eacute;BERGEMENT</h2>\n' +
            '\n' +
            '<p>EDBM-GU s\'engage &agrave; assurer, sous obligation de moyens, l\'h&eacute;bergement des Comptes ainsi que des Profils, D&eacute;marches, Soci&eacute;t&eacute;s publi&eacute;s par un Utilisateur sur la Plateforme sur ses propres serveurs ou par un h&eacute;bergeur professionnel, conforme aux usages de la profession et &agrave; l\'&eacute;tat de l\'art.</p>\n' +
            '<p>A cet effet, EDBM-GU s\'engage &agrave; fournir aux Utilisateurs des capacit&eacute;s de stockage et de traitement suffisantes.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>11 - GARANTIE DE NIVEAU DE SERVICE</h2>\n' +
            '\n' +
            '<p>EDBM-GU s\'engage &agrave; assurer la permanence, la continuit&eacute; et la qualit&eacute; de l\'acc&egrave;s &agrave; la Plateforme pendant toute la dur&eacute;e des Services. A ce titre, EDBM-GU fera ses meilleurs efforts pour maintenir l\'acc&egrave;s &agrave; la Plateforme, sauf pendant les p&eacute;riodes de maintenance et en cas de force majeure.</p>\n' +
            '\n' +
            '<p>Cependant, compte tenu de la complexit&eacute; d\'Internet, de la capacit&eacute; in&eacute;gale des diff&eacute;rents sous-r&eacute;seaux, de l\'afflux &agrave; certains moments, des diff&eacute;rents goulots d\'&eacute;tranglement sur lesquels EDBM-GU n\'a aucun contr&ocirc;le, sa responsabilit&eacute; sera limit&eacute;e au fonctionnement de ses serveurs et / ou les serveurs de son h&eacute;bergeur, dont les limites externes sont constitu&eacute;es par les points de connexion.</p>\n' +
            '\n' +
            '<p>EDBM-GU ne peut donc &ecirc;tre tenu responsable de la rapidit&eacute; d\'acc&egrave;s &agrave; ses serveurs ou aux serveurs de son h&eacute;bergeur, des ralentissements externes &agrave; ses serveurs et / ou aux serveurs de l\'h&eacute;bergeur et des mauvaises transmissions dues &agrave; une panne ou un dysfonctionnement de ces r&eacute;seaux.</p>\n' +
            '\n' +
            '<p>Le cas &eacute;ch&eacute;ant, EDBM-GU se r&eacute;serve le droit de limiter ou de suspendre l\'acc&egrave;s &agrave; la Plateforme afin d\'effectuer toutes op&eacute;rations de maintenance et / ou d\'am&eacute;lioration. Dans le cadre de ces op&eacute;rations de maintenance et / ou d\'&eacute;volution, EDBM-GU s\'engage &agrave; faire ses meilleurs efforts pour sauvegarder les donn&eacute;es stock&eacute;es sur la Plateforme.</p>\n' +
            '\n' +
            '<p>Les utilisateurs reconnaissent et acceptent que cette garantie de niveau de service ne couvre pas les pannes ou les interruptions de la Plateforme caus&eacute;es par des op&eacute;rateurs de t&eacute;l&eacute;communications ou des fournisseurs de services Internet et Web mobile.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>12 - OBLIGATIONS DES UTILISATEURS</h2>\n' +
            '\n' +
            '<p>Sans pr&eacute;judice des autres obligations pr&eacute;vues aux pr&eacute;sentes, les Utilisateurs s\'engagent &agrave; respecter les obligations suivantes:</p>\n' +
            '\n' +
            '<p>(i) Les Utilisateurs s\'engagent, dans leur utilisation des Services, &agrave; se conformer aux lois et r&egrave;glements en vigueur et &agrave; ne pas enfreindre les droits des tiers ou ordre public.</p>\n' +
            '<p>(ii) Les Utilisateurs garantissent que EDBM-GU dispose de tous les droits et autorisations n&eacute;cessaires pour distribuer les informations li&eacute;es au Profil, D&eacute;marches, Soci&eacute;t&eacute;s qu\'ils distribuent sur la Plateforme dans le cadre de l\'utilisation des Services.</p>\n' +
            '\n' +
            '<p>Dans ce contexte, les Utilisateurs garantissent EDBM-GU contre toute r&eacute;clamation, r&eacute;clamation et / ou action d\'un ou plusieurs autres Utilisateurs et / ou de tout tiers affirmant que les informations li&eacute;es au Profil, D&eacute;marche, Soci&eacute;t&eacute; constituent une violation de ses quels qu\'ils soient et notamment ses droits de propri&eacute;t&eacute; intellectuelle, ses droits &agrave; l\'image et la protection de la vie priv&eacute;e. En cons&eacute;quence, les Utilisateurs s\'engagent &agrave; indemniser EDBM-GU pour tout dommage qu\'il pourrait subir et &agrave; supporter tous les dommages, ainsi que tous frais, charges et d&eacute;penses auxquels EDBM-GU pourrait &ecirc;tre command&eacute;e.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>13 - CL&Ocirc;TURE DU COMPTE</h2>\n' +
            '\n' +
            '<p>Les Utilisateurs peuvent &agrave; tout moment se d&eacute;sinscrire des Services et fermer leur Compte en cliquant sur l\'onglet &laquo;Supprimer le Compte&raquo; de leur Espace Personnel. La d&eacute;sactivation du compte se fera dans un d&eacute;lai raisonnable.</p>\n' +
            '\n' +
            '<p>Les Utilisateurs auront la responsabilit&eacute; de r&eacute;cup&eacute;rer les donn&eacute;es qu\'ils auront stock&eacute;es sur leur Espace Personnel sur le support et au format de leur choix, qu\'ils reconnaissent et acceptent.</p>\n' +
            '\n' +
            '<p>Les Utilisateurs reconnaissent express&eacute;ment que EDBM-GU ne pourra &ecirc;tre tenu pour responsable de toute perte ou alt&eacute;ration du Contenu et des donn&eacute;es stock&eacute;es par l\'Utilisateur sur son Compte apr&egrave;s la d&eacute;sactivation de son Compte, quelle qu\'en soit la cause.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>14 - COMPORTEMENT INTERDIT</h2>\n' +
            '\n' +
            '<p>Il est strictement interdit d\'utiliser les Services aux fins suivantes:</p>\n' +
            '\n' +
            '<p>- l\'exercice d\'activit&eacute;s ill&eacute;gales, frauduleuses ou portant atteinte aux droits ou &agrave; la s&eacute;curit&eacute; de tiers,</p>\n' +
            '<p>- l\'intrusion dans le syst&egrave;me informatique d\'un tiers ou toute activit&eacute; susceptible de nuire, de contr&ocirc;ler, d\'interf&eacute;rer avec ou d\'intercepter tout ou partie du syst&egrave;me informatique d\'un tiers, de violer son int&eacute;grit&eacute; ou sa s&eacute;curit&eacute;,</p>\n' +
            '<p>- d\'aider ou d\'encourager, sous quelque forme que ce soit et par tout moyen, un ou plusieurs des actes et activit&eacute;s d&eacute;crits ci-dessus,</p>\n' +
            '<p>- et plus g&eacute;n&eacute;ralement toute pratique qui d&eacute;tourne les Services &agrave; des fins autres que celles pour lesquelles ils ont &eacute;t&eacute; con&ccedil;us.</p>\n' +
            '\n' +
            '<p>Sont &eacute;galement strictement interdits: (i) tout comportement susceptible d\'interrompre, suspendre, ralentir ou emp&ecirc;cher la continuit&eacute; des Services, (ii) toute intrusion ou tentative d\'intrusion dans les syst&egrave;mes informatiques, (iii) tout d&eacute;tournement des ressources syst&egrave;me de la Plateforme , (iv) toute action susceptible d\'imposer une charge disproportionn&eacute;e aux infrastructures de la Plateforme, (v) toute violation des mesures de s&eacute;curit&eacute; et d\'authentification, (vi) tout acte susceptible d\'affecter les droits et int&eacute;r&ecirc;ts financiers, commerciaux ou moraux de EDBM-GU, et enfin, plus g&eacute;n&eacute;ralement (vii) tout manquement aux pr&eacute;sentes conditions g&eacute;n&eacute;rales.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>15 - SANCTION DES INFRACTIONS</h2>\n' +
            '\n' +
            '<p>En cas de manquement &agrave; l\'une des dispositions des pr&eacute;sentes conditions g&eacute;n&eacute;rales, ou plus g&eacute;n&eacute;ralement, de violation des lois et r&egrave;glements par les Utilisateurs, EDBM-GU se r&eacute;serve le droit de:</p>\n' +
            '\n' +
            '<p>(i) suspendre temporairement ou d&eacute;finitivement, sans retard, l\'acc&egrave;s aux Services de l\'Utilisateur qui a commis ou particip&eacute; &agrave; la violation ou l\'infraction,</p>\n' +
            '<p>(ii) supprimer tout contenu li&eacute; &agrave; la violation ou l\'infraction en question, en tout ou en partie,</p>\n' +
            '<p>(iii) prendre toutes les mesures appropri&eacute;es et prendre action en justice,</p>\n' +
            '<p>(iv) le cas &eacute;ch&eacute;ant, informer les autorit&eacute;s comp&eacute;tentes, coop&eacute;rer avec elles et leur fournir toutes les informations pertinentes pour l\'enqu&ecirc;te et la r&eacute;pression des activit&eacute;s ill&eacute;gales ou illicites.</p>\n' +
            '<p>En cas de manquement par l\'Utilisateur &agrave; une obligation d&eacute;coulant des pr&eacute;sentes conditions g&eacute;n&eacute;rales, ou d\'un manquement r&eacute;p&eacute;t&eacute; &agrave; celles-ci, EDBM-GU se r&eacute;serve le droit de r&eacute;silier l\'acc&egrave;s de l\'Utilisateur &agrave; tout ou partie des Services, avec effet imm&eacute;diat. Cette r&eacute;siliation entra&icirc;ne automatiquement et sans mise en demeure pr&eacute;alable la cl&ocirc;ture du Compte de l\'Utilisateur, sans pr&eacute;judice de toutes autres cons&eacute;quences pouvant r&eacute;sulter des pr&eacute;sentes conditions g&eacute;n&eacute;rales.</p>\n' +
            '\n' +
            '\n' +
            '\n' +
            '\t<h2>16 - LIMITATION DE RESPONSABILIT&Eacute; ET GARANTIE DE EDBM-GU</h2>\n' +
            '\n' +
            '<p>EDBM-GU s\'engage &agrave; faire ses meilleurs efforts pour fournir les Services avec diligence et conform&eacute;ment aux r&egrave;gles de l\'art, &eacute;tant pr&eacute;cis&eacute; qu\'il a une obligation de moyens, &agrave; l\'exclusion de toute obligation de r&eacute;sultat, ce que les Utilisateurs reconnaissent et acceptent express&eacute;ment.</p>\n' +
            '\n' +
            '<p>Sa responsabilit&eacute; est exclusivement limit&eacute;e &agrave; la fourniture des Services conform&eacute;ment aux termes et conditions d&eacute;crits aux pr&eacute;sentes, &agrave; l\'exclusion de tout autre service.</p>\n' +
            '<p>Les Communes sont fournies telles quelles, sans garantie d\'aucune sorte, expresse ou implicite, y compris en ce qui concerne leur contenu, leur exactitude ou leur ad&eacute;quation &agrave; l\'usage. En aucun cas, les Utilisateurs ne peuvent chercher &agrave; tenir EDBM-GU responsable &agrave; cet &eacute;gard.</p>\n' +
            '\n' +
            '<p>Les utilisateurs reconnaissent et acceptent en outre que les services sont fournis tels quels sans garantie d\'aucune sorte, expresse ou implicite. En particulier, EDBM-GU ne garantit pas que:</p>\n' +
            '<p>- les Services, soumis &agrave; une recherche constante pour am&eacute;liorer leurs performances et leur &eacute;volution, seront totalement exempts d\'erreurs, de d&eacute;fauts ou de d&eacute;fauts;</p>\n' +
            '<p>- les Services &eacute;tant standards et en aucun cas propos&eacute;s uniquement au profit des Utilisateurs en fonction de leurs propres contraintes personnelles, r&eacute;pondront sp&eacute;cifiquement &agrave; leurs besoins et attentes;</p>\n' +
            '<p>- la Plateforme fonctionnera de fa&ccedil;on ininterrompue, EDBM-GU se r&eacute;servant le droit d\'interrompre temporairement l\'acc&egrave;s &agrave; la Plateforme &agrave; des fins de maintenance dans les conditions de l\'article &laquo;Garantie de niveau de service&raquo;.</p>\n' +
            '<p>EDBM-GU ne peut &ecirc;tre tenu pour responsable d&rsquo;&eacute;ventuels virus qui pourraient infecter l&rsquo;ordinateur ou tout mat&eacute;riel informatique de l&rsquo;Internaute, suite &agrave; une utilisation, &agrave; l&rsquo;acc&egrave;s, ou au t&eacute;l&eacute;chargement provenant de la Plateforme.</p>\n' +
            '\n' +
            '<p>EDBM-GU d&eacute;cline &eacute;galement toute responsabilit&eacute; en cas de perte &eacute;ventuelle des informations li&eacute;es au Profil, D&eacute;marches, Soci&eacute;t&eacute;s et autres informations accessibles sur le Compte Utilisateur, ces derniers devant s\'assurer, s\'ils le jugent n&eacute;cessaire, d\'en conserver une copie et non pouvoir pr&eacute;tendre &agrave; une quelconque indemnit&eacute; &agrave; ce titre.</p>\n' +
            '\n' +
            '\t<h2>16 - PROPRI&Eacute;T&Eacute; INTELLECTUELLE</h2>\n' +
            '\n' +
            '<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales ne conf&egrave;rent aux Utilisateurs aucun droit de propri&eacute;t&eacute; intellectuelle de quelque nature que ce soit sur la Plateforme, la marque et le logo EDBM-GU, ainsi que sur les logiciels, structures, infrastructures et bases de donn&eacute;es utilis&eacute;s par EDBM-GU au sein de la Plateforme dans le cadre de la fourniture des Services, qui restent la propri&eacute;t&eacute; exclusive, pleine et enti&egrave;re de EDBM-GU.</p>\n' +
            '\n' +
            '<p>L\'Utilisateur doit solliciter l\'autorisation pr&eacute;alable du site pour toute reproduction, publication, copie des diff&eacute;rents contenus. Il s\'engage &agrave; une utilisation des contenus du site dans un cadre strictement priv&eacute;, toute utilisation &agrave; des fins commerciales et publicitaires est strictement interdite.</p>\n' +
            '\n' +
            '<p>Toute repr&eacute;sentation totale ou partielle de la Plateforme par quelque proc&eacute;d&eacute; que ce soit, sans l&rsquo;autorisation expresse de l&rsquo;exploitant du site Internet constituerait une contrefa&ccedil;on sanctionn&eacute;e par l&rsquo;article ----------- et suivants du Code de la propri&eacute;t&eacute; intellectuelle.</p>\n' +
            '\n' +
            '\n' +
            '\n' +
            '<h2>17 - DONN&Eacute;ES PERSONNELLES</h2>\n' +
            '\n' +
            '<p>EDBM-GU d&eacute;clare respecter toutes les obligations l&eacute;gales et r&eacute;glementaires en mati&egrave;re de protection des donn&eacute;es personnelles, notamment en vue de garantir la s&eacute;curit&eacute; et la confidentialit&eacute; des donn&eacute;es collect&eacute;es et trait&eacute;es.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>18 - LIENS ET SITES TIERS</h2>\n' +
            '\n' +
            '<p>EDBM-GU ne peut en aucun cas &ecirc;tre tenu responsable de la disponibilit&eacute; technique des sites Internet exploit&eacute;s par des tiers (y compris d\'&eacute;ventuels partenaires) auxquels les Utilisateurs peuvent acc&eacute;der via la Plateforme.</p>\n' +
            '\n' +
            '<p>EDBM-GU n\'assume aucune responsabilit&eacute; pour le contenu, la publicit&eacute;, les produits et / ou services disponibles sur ces sites tiers, qui sont r&eacute;gis par leurs propres conditions d\'utilisation.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>19 - COOKIES</h2>\n' +
            '\n' +
            '<p>L&rsquo;Utilisateur est inform&eacute; que lors de ses visites sur le site, un cookie peut s&rsquo;installer automatiquement sur son logiciel de navigation.</p>\n' +
            '<p>Les cookies sont de petits fichiers stock&eacute;s temporairement sur le disque dur de l&rsquo;ordinateur des Utilisateurs par leur navigateur et qui sont n&eacute;cessaires &agrave; l&rsquo;utilisation de la Plateforme.</p>\n' +
            '<p>Les cookies ne contiennent pas d&rsquo;informations personnelles et ne peuvent pas &ecirc;tre utilis&eacute;s pour identifier quelqu&rsquo;un. Un cookie contient un identifiant unique, g&eacute;n&eacute;r&eacute; al&eacute;atoirement et donc anonyme. Certains cookies expirent &agrave; la fin de la visite de l&rsquo;Utilisateur, d&rsquo;autres restent.</p>\n' +
            '<p>L&rsquo;information contenue dans les cookies est utilis&eacute;e pour am&eacute;liorer la Plateforme.</p>\n' +
            '<p>En naviguant sur le site, les Utilisateurs les acceptent.</p>\n' +
            '<p>Les Utilisateurs doivent toutefois donner son consentement quant &agrave; l&rsquo;utilisation de certains cookies.</p>\n' +
            '<p>A d&eacute;faut d&rsquo;acceptation, les Utilisateurs sont inform&eacute;s que certaines fonctionnalit&eacute;s ou pages risquent de lui &ecirc;tre refus&eacute;es.</p>\n' +
            '<p>Les Utilisateurs pourront d&eacute;sactiver ces cookies par l&rsquo;interm&eacute;diaire des param&egrave;tres figurant au sein de son logiciel de navigation.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>20 - MODIFICATION DES CONDITIONS G&Eacute;N&Eacute;RALES</h2>\n' +
            '\n' +
            '<p>EDBM-GU se r&eacute;serve le droit de modifier les pr&eacute;sentes conditions g&eacute;n&eacute;rales &agrave; tout moment. Il se r&eacute;serve &eacute;galement le droit de modifier et / ou d\'interrompre l\'offre de tout ou partie des Services &agrave; tout moment &agrave; sa seule discr&eacute;tion.</p>\n' +
            '\n' +
            '<p>Les utilisateurs seront inform&eacute;s de ces modifications par tout moyen appropri&eacute;, au moins 15 jours avant leur entr&eacute;e en vigueur. Les conditions g&eacute;n&eacute;rales ainsi modifi&eacute;es s\'appliqueront imm&eacute;diatement &agrave; tout Utilisateur des Services d&egrave;s leur mise en ligne sur la Plateforme.</p>\n' +
            '\n' +
            '<p>L\'Utilisateur qui n\'accepte pas les conditions g&eacute;n&eacute;rales modifi&eacute;es doit se d&eacute;sinscrire des Services.</p>\n' +
            '\n' +
            '<p>Tout Utilisateur qui utilise les Services apr&egrave;s l\'entr&eacute;e en vigueur des conditions g&eacute;n&eacute;rales modifi&eacute;es est r&eacute;put&eacute; avoir accept&eacute; ces modifications, qui lui seront pleinement applicables.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>21 - LOI APPLICABLE ET JURIDICTION COMP&Eacute;TENTE</h2>\n' +
            '\n' +
            '<p>La loi applicable &agrave; tous les litiges pouvant survenir dans le cadre des pr&eacute;sentes conditions g&eacute;n&eacute;rales, et notamment leur existence, validit&eacute;, formation, interpr&eacute;tation, ex&eacute;cution ou r&eacute;siliation, est le droit fran&ccedil;ais.</p>\n' +
            '\n' +
            '<p>Tout litige ou controverse concernant l\'interpr&eacute;tation ou l\'ex&eacute;cution du contrat sera soumis &agrave; la comp&eacute;tence exclusive des tribunaux d&rsquo;Antananarivo, sauf dispositions imp&eacute;ratives contraires.</p>\n' +
            '\n' +
            '\n' +
            '\t<h2>22 - ENTR&Eacute;E EN VIGUEUR</h2>\n' +
            '\n' +
            '<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales sont entr&eacute;es en vigueur le ------------------ .</p>';
        //cgu= files;
       /* readFile('..cgu/cgu.txt', null, (err, data) => {
            if (err) {
                return console.log(err);
            } else {
                cgu = data;
            }
        })*/
        var paragraphe_intro ="Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par ________________ et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur »."+
        "Les présentes CGU sont accessibles sur le site à la rubrique «CGU»."+
       " Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte »."+
       " En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site."+
       " ________________ se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU."
        ;
        var article_1=""+
        "L'édition du site ________________ est assurée par la Société ________________ ________________ au capital de ________________ ariary, immatriculée au RCS de ________________ sous le numéro ________________, dont le siège social est situé au ________________"+
       " Numéro de téléphone ________________"+
       " Adresse e-mail : ________________."+
       " Le Directeur de la publication est : ________________"+
       " L'hébergeur du site ________________ est la société ________________, dont le siège social est situé au ________________, avec le numéro de téléphone : ________________.";
        var article_2="Le site ________________ permet à l'Utilisateur un accès gratuit aux services suivants :"+
        "Le site internet propose les services suivants :"+
        "Gestion de procédure d'entreprise en ligne.(Création, Modification, Dissolution, Mise en Veilleuse)"+
        "Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge."+
        "L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email."+
        "Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription."+
        "Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable."+
        "Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de ________________. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou suspension de service, même sans préavis."+
       " L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur communiqué à  l’ARTICLE 1.";
        var article_3="Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le site est déclaré à la CNIL sous le numéro ________________."+
        "En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :"+
        "· via son espace personnel ";
        var article_4="Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur."+
       " L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite."+
        "Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle."+
       " Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.";
        var article_5="Les sources des informations diffusées sur le site ________________ sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions."+
        "Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site ________________ ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site."+
       " L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité."+
       " Le site ________________ ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site."+
       " La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers."
        var article_6="Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site ________________. "+
        "Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu."
        var article_7="L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation."+
        "Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site ________________. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent."+
        "L’information contenue dans les cookies est utilisée pour améliorer le site ________________."+
        "En naviguant sur le site, L’Utilisateur les accepte."+
       " L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies."+
        "A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées."+
       " L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation."
        var article_8="La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître."+
        "Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1."
        return (

                <div className='CGU'>
                    <NavBarAll/>
                    <main className="wrapper cmsPage">

                    {ReactHtmlParser(cgu)}
                    </main>
                    <Footer/>
                </div>
        )
    }
}
export default CGU
