import React from 'react'

export default function Sub() {
    return (
        <>
            <header>
                <div class="box w-100 d-flex justify-content-center align-items-center">

                    <div class="text text-center">
                        <h3>Unlimited Movies, TV <br /> Shows, and More.</h3>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <label class="d-block" for="sub"><span>Ready to watch?</span> Enter your email to create or restart your
                            membership.</label>
                        <form action="">
                            <input class="w-100" id="sub" type="text" placeholder="Email address" />
                            <button>subscribe</button>
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}
