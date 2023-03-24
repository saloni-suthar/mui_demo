import React from 'react'
import Index from '../Index'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionComponent() {
    return (
        <>

            <Index.Box className="accordion-componet">
                <Index.Accordion className='accordion-main'>
                    <Index.AccordionSummary
                        className='accordion-summary'
                        expandIcon={<ExpandMoreIcon  className="expand-more-icon"/>}  // if change plus icon useing after before
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Index.Typography className='accordion-titles'>Q1. How will my order be delivered to me?</Index.Typography>
                    </Index.AccordionSummary>
                    <Index.AccordionDetails className='accordion-details'>
                        <Index.Typography className="accordion-pcontent">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        </Index.Typography>
                    </Index.AccordionDetails>
                </Index.Accordion>
                <Index.Accordion className='accordion-main'>
                    <Index.AccordionSummary
                        className='accordion-summary'
                        expandIcon={<ExpandMoreIcon className="expand-more-icon"/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Index.Typography className='accordion-titles'>Q1. How will my order be delivered to me?</Index.Typography>
                    </Index.AccordionSummary>
                    <Index.AccordionDetails className='accordion-details'>
                        <Index.Typography className="accordion-pcontent">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Index.Typography>
                    </Index.AccordionDetails>
                </Index.Accordion>

            </Index.Box>

        </>
    )
}

export default AccordionComponent