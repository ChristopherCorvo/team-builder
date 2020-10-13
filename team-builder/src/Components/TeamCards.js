import React from 'react';

const TeamCards = (props) => {
    const { teamMembers } = props
    console.log(teamMembers)

    return teamMembers.map((member) => {
           return (
            <div>
                <h2>{member.name}</h2>   
                <h2>{member.email}</h2>
                <h2>{member.role}</h2>
            </div>
           );
        });
    
};

export default TeamCards;





