import React from "react";
import { Routes, Route } from "react-router-dom";
import {
Users, 
UserCreate, UserEdit, UserView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                            <Route path="/" element={<Users {...props} title={'Users Table'} nolistbar={true} />} />
                                            <Route path="Users/view/:id" element={<UserView {...props} title={'View User'} />} />
                        <Route path="Users/edit/:id" element={<UserEdit {...props} title={'Edit User'} />} />
                        <Route path="Users/create" element={<UserCreate {...props} title={'Create User'} />} />

                <Route path="/users" element={<Users {...props} title={'Users Table'} />} />
                                                                                                        </Routes>
    )

};

export default Component;