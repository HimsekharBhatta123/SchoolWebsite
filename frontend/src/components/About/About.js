import React, { useEffect, useState } from 'react'
import './About.css'
import school from '../Assets/school2.jpeg'
import axios from 'axios'
function About() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/about');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

document.title = 'About - C.K Academy '
return (
    <>
        {/* <h1>hello</h1> */}
        <div className="container">
            <div className="about-us">
                <div className="about-us-title">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about-content">
                <div className="about-header">
                    <img src={school} alt="" />
                    <div className="about-header-content">
                        <h2>About C.K Academy English School</h2>
                    </div>
                </div>
                <div className="about-detail">
                    <div className="about-text">
                        <p>C K Academy School is known for academic excellence and strict discipline. The school provides unsurpassable standards of didactics and ensures the progressive development of innate powers of children. Education does not simply mean to teach a child, information mentioned in books, it means to teach a child, the life lessons that form an essential part of child's growth. At C K Academy school, we strive to bring out the creative aspects of each child, through various activities. The management and staff work relentlessly to achieve the objective of the student's overall development.</p>
                    </div>
                    <div className="school-instructions">
                        <h3>GENERAL RULES OF THE SCHOOL:</h3>
                        <ul>
                            <li>Pupils are responsible for the safe custody of their books and belongings. Ornaments and jewellery of any kind are not allowed in the School. To prevent loss of articles, umbrellas, raincoats, tiffin-carriers etc. should be marked with the name of the Child.</li>
                            <li>Any loss or damage done to the School property should be made good by the pupil concerned.</li>
                            <li>No procession or any demonstration will be allowed without the previous permission of the School authorities. Collection for any purpose whatsoever requires the Principal's sanction.</li>
                            <li>Parents/Guardians are not allowed to see their children or meet any teacher during School hours.</li>
                            <li>Every pupil must possess a school calender which should be brought to the School daily.</li>
                        </ul>
                    </div>
                    <div className="examination-instructions">
                        <h3>EXAMINATION & PROMOTION:</h3>
                        <ul>
                            <li>Reprots of unit test and Half yearly Examination are given in the pupil's report cards. parents or guardian should sign them regularly and follow the progress of the children. A child found with report unsigned will no be admitted in the class.</li>
                            <li>Promotion is decided at the meeting of the Headmistress and the teachers concerned. Hence results are final and cannot be reconsidered. Final Examination answer script will not be shown in any case without process as per rule.</li>
                            <li>No student will be allowed to repeat the same class for third time. A student who fails twice in three consecutive years is considered as withdrawn from the School.</li>
                            <li>A pupil who fails in any two of the major/core subjects or in three minor subjects is considered to have failed.</li>
                            <li>No pupil will be allowed to sit for the promotion examination if the attendance during the years is below 85%.</li>
                        </ul>
                    </div>
                    <div className="fees-instructions">
                        <h3>Fees:</h3>
                        <ul>
                            <li>The School fees cover twelve calendar months. No reduction is made for holidays or broken periods. pupils are liable to pay fees as their names are officially on the rolls.</li>
                            <li>Pupils failing to pay fees for three consecutive months without any information will have their names struck off from the rolls.</li>
                            <li>Fees must be paid on or before the 20th of each month.</li>
                            <li>Pupils whose dues are not cleared completely will be debarred from examination.</li>
                        </ul>
                    </div>
                    <div className="notice-instructions">
                        <h3>IMPORTANT NOTICE FOR PARENTS/GUARDIANS:</h3>
                        <ul>
                            <li>Parents and guardians are earnestly requested to co- operate with the School authorities regarding rules, lessons, home-work, extra-activities and character training of the children.</li>
                            <li>Any communication (request or complaint) made by the parents should be addressed to the Principal/Head Mistress and not to the class teacher.</li>
                            <li>Parents are requested to interview the Headmistress to discuss the progress of their children by previous appointment.</li>
                            <li>No School busines will be transacted during holidays. Look through the regularity record, report book and answer script of the students periodically.</li>
                            <li>A record of address of parents or guardians is maintained in the School office. Any Change of address should be communicated without delay to the school office.</li>
                            <li>Parents/Guardians are advised to meet the Principal/Head Mistress when call for.</li>
                        </ul>
                    </div>
                    <div className="fees-structure">
                        <h3>Admission Fees</h3>
                        <table className='fees-structure-table'>
                            <thead>
                                <tr>
                                    <th>Class Id</th>
                                    <th>Class</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((fees)=>(
                                    <tr key={fees.id}>
                                    <td>{fees.id}</td>
                                    <td>{fees.fees_class}</td>
                                    <td>{fees.amount}</td>
                                </tr>
                                ))}
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default About;