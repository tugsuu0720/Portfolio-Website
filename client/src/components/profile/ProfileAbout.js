import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const ProfileAbout = ({ profile: {
    bio,
    skills,
    user: { name }
}}) => 
        <div className="profile-about bg-light p-2">
{bio && (
    <Fragment>
            <h2 className="text-primary">{name.trim().split(' ')[0]}'s Bio</h2>
            <p>
                {bio}
            </p>
            <div className="line"></div>
    </Fragment>
)}

            <h2 className="text-primary">Skill Set</h2>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div key={index} className="p-1">
                        <i className="fas fa-check"></i> {skill}
                    </div>
                ))}
            </div>
        </div>

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout



                //     <div className="profile-exp bg-white p-2">
                //     <h2 class="text-primary">Experience</h2>
                //     <div>
                //         <h3 class="text-dark">Microsoft</h3>
                //         <p>Oct 2011 - Current</p>
                //         <p><strong>Position: </strong>Senior Developer</p>
                //         <p>
                //         <strong>Description: </strong>Lorem ipsum dolor sit amet
                //         consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                //         ipsam, sapiente suscipit dicta eius velit amet aspernatur
                //         asperiores modi quidem expedita fugit.
                //         </p>
                //     </div>
                //     <div>
                //         <h3 class="text-dark">Sun Microsystems</h3>
                //         <p>Nov 2004 - Nov 2011</p>
                //         <p><strong>Position: </strong>Systems Admin</p>
                //         <p>
                //         <strong>Description: </strong>Lorem ipsum dolor sit amet
                //         consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                //         ipsam, sapiente suscipit dicta eius velit amet aspernatur
                //         asperiores modi quidem expedita fugit.
                //         </p>
                //     </div>
                //     </div>

                //     <div class="profile-edu bg-white p-2">
                //     <h2 class="text-primary">Education</h2>
                //     <div>
                //         <h3>University Of Washington</h3>
                //         <p>Sep 1993 - June 1999</p>
                //         <p><strong>Degree: </strong>Masters</p>
                //         <p><strong>Field Of Study: </strong>Computer Science</p>
                //         <p>
                //         <strong>Description: </strong>Lorem ipsum dolor sit amet
                //         consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                //         ipsam, sapiente suscipit dicta eius velit amet aspernatur
                //         asperiores modi quidem expedita fugit.
                //         </p>
                //     </div>
                //     </div>

                //     <div class="profile-github">
                //     <h2 class="text-primary my-1">
                //         <i class="fab fa-github"></i> Github Repos
                //     </h2>
                //     <div class="repo bg-white p-1 my-1">
                //         <div>
                //         <h4><a href="#" target="_blank"
                //             rel="noopener noreferrer">Repo One</a></h4>
                //         <p>
                //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
                //             Repellat, laborum!
                //         </p>
                //         </div>
                //         <div>
                //         <ul>
                //             <li class="badge badge-primary">Stars: 44</li>
                //             <li class="badge badge-dark">Watchers: 21</li>
                //             <li class="badge badge-light">Forks: 25</li>
                //         </ul>
                //         </div>
                //     </div>
                //     <div class="repo bg-white p-1 my-1">
                //         <div>
                //         <h4><a href="#" target="_blank"
                //             rel="noopener noreferrer">Repo Two</a></h4>
                //         <p>
                //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
                //             Repellat, laborum!
                //         </p>
                //         </div>
                //         <div>
                //         <ul>
                //             <li class="badge badge-primary">Stars: 44</li>
                //             <li class="badge badge-dark">Watchers: 21</li>
                //             <li class="badge badge-light">Forks: 25</li>
                //         </ul>
                //         </div>
                //     </div>
                // </div>