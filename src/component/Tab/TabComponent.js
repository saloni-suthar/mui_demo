import React from 'react'
import Index from '../Index'
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        className='tabpanel-simple'
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Index.Box className="function-tab-details">
                    <Index.Typography className="text-typo-tab">{children}</Index.Typography>
                </Index.Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function TabComponent() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <Index.Box className="tab-content-main">
                <Index.Box sx={{ width: '100%' }} className="tab-details-content">
                    <Index.Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tab-border-content">
                        <Index.Tabs className="tabs-content-top" value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Index.Tab className="tabs-content-title" label="Item One" {...a11yProps(0)} />
                            <Index.Tab className="tabs-content-title" label="Item Two" {...a11yProps(1)} />
                            <Index.Tab className="tabs-content-title" label="Item Three" {...a11yProps(2)} />
                        </Index.Tabs>
                    </Index.Box>
                    <TabPanel value={value} index={0} className="tabs-content-panel">
                        <Index.Box className="tab-panel-details">
                            Tab 1
                        </Index.Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Index.Box className="tab-panel-details">
                            Tab 2
                        </Index.Box>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Index.Box className="tab-panel-details">
                            Tab 3
                        </Index.Box>
                    </TabPanel>
                </Index.Box>
            </Index.Box>



        </>
    )
}

export default TabComponent