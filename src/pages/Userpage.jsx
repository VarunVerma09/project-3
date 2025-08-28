import React from 'react';

const Userpage = () => {
    return (
        <>

            <div class="container my-4">
                <div class="row">


                    <div class="col-md-3">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="mb-3">Hello, <strong>Varun Verma</strong></h6>
                                <ul class="list-group">
                                    <li class="list-group-item fw-bold">MY ORDERS</li>
                                    <li class="list-group-item fw-bold">ACCOUNT SETTINGS</li>
                                    <li class="list-group-item">Profile Information</li>
                                    <li class="list-group-item">Manage Addresses</li>
                                    <li class="list-group-item">PAN Card Information</li>
                                    <li class="list-group-item fw-bold">PAYMENTS</li>
                                    <li class="list-group-item">Gift Cards</li>
                                    <li class="list-group-item">Saved UPI</li>
                                    <li class="list-group-item">Saved Cards</li>
                                    <li class="list-group-item fw-bold">MY STUFF</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-9">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h5 class="mb-3">Personal Information <a href="#" class="text-primary small">Edit</a></h5>

                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" value="Varun" />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" value="Verma" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Your Gender</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" checked />
                                        <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" />
                                        <label class="form-check-label">Female</label>
                                    </div>
                                </div>

                                <h5 class="mb-3">Email Address <a href="#" class="text-primary small">Edit</a></h5>
                                <input type="email" class="form-control mb-3" value="umangsoni409@gmail.com" disabled />

                                <h5 class="mb-3">Mobile Number <a href="#" class="text-primary small">Edit</a></h5>
                                <input type="text" class="form-control mb-3" value="+917830473709" disabled />

                                <h5>FAQs</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Userpage;
