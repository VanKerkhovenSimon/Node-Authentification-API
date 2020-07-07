import React, { Component } from 'react'

export default class questionnaire extends Component {
    
    state = {
        questionnaire :[
            {
                valeurreponses: [0,1,2,3,4],
                reponses : [
                    {
                    maxvalue:24,
                    texte:"Aire de développement: nécessite votre attention",
                    },
                    {
                    maxvalue:35,
                    texte:"Fonctionnement efficace : mérite d'être renforcé",
                    },
                    {
                    maxvalue:40,
                    texte:"Véritable compétence: à utiliser comme un levier pour développer votre air de développement",
                    },
                ],
                categories : [
                    {
                        id:1,
                        name : "Conscience de soi",
                        questions : [
                            {
                            id:1,
                            texte:"Mes émotions sont claires pour moi en règle générale, j'arrive à mettre des mots dessus et à les décrire",  
                            },
                            {
                            id:2,
                            texte:"Je suis en mesure de relever des changements physiologiques lorsque je ressens des émotions",  
                            },
                            {
                            id:3,
                            texte:"Mes émotions impactent les gens autour de moi",  
                            },
                            {
                            id:4,
                            texte:"Je trouve facile de mettre des mots sur mes émotions",  
                            },
                            {
                            id:5,
                            texte:"Je suis facilement affecté par des évènements externes",  
                            },
                            {
                            id:6,
                            texte:"Je reconnais quand je vais me mettre en colère",  
                            },
                            {
                            id:7,
                            texte:"Je m'ouvre facilement aux autres de mes sentiments sincères",  
                            },
                            {
                            id:8,
                            texte:"Il peut arriver que je me parle pour modifier mes états émotifs",  
                            },
                            {
                            id:9,
                            texte:"Même si je suis énervé, je reste conscient de ce qui se passe",  
                            },
                            {
                            id:10,
                            texte:"J'arrive à séparer mes pensées de mes sentiments si je les examine",  
                            },
                            
                        ],
                        
                    },
                    {
                        id:2,
                        name : "Maîtrise de soi",
                        questions : [
                            {
                            id:1,
                            texte:"Je prends la resposabilités de mes réactions",  
                            },
                            {
                            id:2,
                            texte:"Il est aisé pour moi de me définir des objectifs et de m'y tenir",  
                            },
                            {
                            id:3,
                            texte:"Je me décrirais comme une personne équilibrée émotionnellement",  
                            },
                            {
                            id:4,
                            texte:"Je suis quelqu'un de patient",  
                            },
                            {
                            id:5,
                            texte:"Je sais accepter les commentaires critiques sans me sentir fâché",  
                            },
                            {
                            id:6,
                            texte:"Même dans les moments stressants, je maintiens mon sang froid",  
                            },
                            {
                            id:7,
                            texte:"Si je ne suis pas impacté directement par un problème, je ne le laisse pas m'affecter",  
                            },
                            {
                            id:8,
                            texte:"J'arrive à me freiner lorsque je ressens de la colère pour quelqu'un, je reste efficace",  
                            },
                            {
                            id:9,
                            texte:"Je contrôle les envies de choses qui pourraient faire baisser mon bien-être",  
                            },
                            {
                            id:10,
                            texte:"Je dirige mon énergie vers des activités créatives",  
                            },
                            
                        ],
                        
                    },
                    {
                        id:3,
                        name : "Conscience sociale",
                        questions : [
                            {
                            id:1,
                            texte:"Je considère l'impact de mes actions sur les autres",  
                            },
                            {
                            id:2,
                            texte:"Je peux rapidement voir si les personnes autour de moi sont en train de s'énerver",  
                            },
                            {
                            id:3,
                            texte:"Si l'état d'esprit d'une personne change, je le sens immédiatement",  
                            },
                            {
                            id:4,
                            texte:"Je suis capable d'annoncer de mauvaises nouvelles aux autres",  
                            },
                            {
                            id:5,
                            texte:"En règle générale, je comprends ce que les autres ressentent",  
                            },
                            {
                            id:6,
                            texte:"Mes amis me confient des choses intimes",  
                            },
                            {
                            id:7,
                            texte:"Je sais difficilement me contrôler lorsque je vois quelqu'un pleurer",  
                            },
                            {
                            id:8,
                            texte:"Je sais faire la différence entre les moments où il faut parler... et ceux où il faut se taire",  
                            },
                            {
                            id:9,
                            texte:"Je comprends que les plans d'autres personnes peuvent changer, je m'adapte",  
                            },
                            {
                            id:10,
                            texte:"J'ai une vision positive des autres",  
                            },
                            
                        ],
                        
                    },
                    {
                        id:4,
                        name : "Gestion des relations",
                        questions : [
                            {
                            id:1,
                            texte:"Je me retrouve à agir comme médiateur dans des tensions entre d'autres personnes",  
                            },
                            {
                            id:2,
                            texte:"Je fournis des conseils et du soutien aux autres, au besoin",  
                            },
                            {
                            id:3,
                            texte:"Je partage facilement des sentiments intimes aux autres",  
                            },
                            {
                            id:4,
                            texte:"Je suis un bon motivateur d'équipe",  
                            },
                            {
                            id:5,
                            texte:"On dit de moi que je suis une personne joyeuse et amusante",  
                            },
                            {
                            id:6,
                            texte:"Je me fais facilement de nouveaux amis",  
                            },
                            {
                            id:7,
                            texte:"J'exprime clairement les pensées d'un groupe. (Je suis capable de synthèse)",  
                            },
                            {
                            id:8,
                            texte:"Aider les autres me fait plaisir",  
                            },
                            {
                            id:9,
                            texte:"J'aime qu'on sache qu'on peut compter sur moi",  
                            },
                            {
                            id:10,
                            texte:"Je suis capable de calmer quelqu'un qui est bouleversé",  
                            },
                            
                        ],
                        
                    },
                ],  
            }
        ],
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
