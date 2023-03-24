import React from 'react'
import Index from '../Index'

function LabelInputField() {
    return (
        <>

            <Index.Box className="input-details-main">
                <Index.Box className="input-box cm-search-box">
                    <Index.Box className="form-group">
                        <Index.FormHelperText className="label-input-title">Label Content</Index.FormHelperText>
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

export default LabelInputField