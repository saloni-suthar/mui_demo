import React from 'react'
import Index from '../Index'

function SimpleInputField() {
    return (
        <>

            <Index.Box className="input-details-main">
                <Index.Box className="input-box cm-search-box">
                    <Index.Box className="form-group">
                        <Index.TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder="Search here...."
                        />

                    </Index.Box>
                </Index.Box>

            </Index.Box>

        </>
    )
}

export default SimpleInputField