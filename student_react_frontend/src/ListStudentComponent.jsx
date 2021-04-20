
import React, { Component } from 'react';
import StudentServices from './StudentServices';
    
    class ListStudentComponent extends Component {

        constructor(){
            super();
            this.state = {
                students :[]
            }
        }


        componentDidMount(){
            StudentServices.getStudent().then((res)=>{
                this.setState({students: res.data});
            });
        }



        render() {
            return (
                <div className='container'>
                    <h2 className='text-center text-primary'> Students List</h2>
                    <div className='row'>
                    <table className='table table-striped table-bordered table-hover'>
                        <tbody>
                            <tr className="table-success">
                                <th>Student ID</th>
                                <th>Student First Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email</th>
                                <th>Student Phone</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.students.map(
                                    students=>
                                    <tr key={students.id}>
                                        <td> {students.id}</td>
                                        <td> {students.firstName} </td>
                                        <td> {students.lastName} </td>
                                        <td> {students.email} </td>
                                        <td> {students.phone} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                    </div>
                </div>
            );
        }
    }
    
    export default ListStudentComponent;
