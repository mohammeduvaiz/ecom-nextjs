import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const ProductTabsComp = () => {
    const [value, setValue] = useState("1")
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ marginLeft: '10px', width: '25%', typography: 'body1' }} className='hidden md:block min-h-screen fixed'>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} indicatorColor="" textColor="inherit">
                        <Tab label="DETAILS" value="1" />
                        <Tab label="DELIVERY" value="2" />
                        <Tab label="FIT" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <p className='text-sm font-normal text-black leading-normal'>
                        The Forte Lurex Linen Viscose Jacket in Mother of
                        Pearl features lunar lavishness by night and by day:
                        a blazer in a linen blend shot with lurex for a
                        shimmering surface that shines like a star in
                        the sky. it has a straight fit with well defined shoulders
                        and a shawl collar culminating in a button and has
                        been flawlessly finished with three jet pockets with
                        a sartorial feel.
                    </p>
                    <p className='text-sm font-normal text-black leading-normal mt-3'>See the EDITOR’S NOTE</p>
                    <p className='text-sm font-normal text-black leading-normal mt-3'>Learn about the DESIGNER</p>
                </TabPanel>
                <TabPanel value="2"> <p className='text-sm font-normal text-black leading-normal '>DELIVERY</p></TabPanel>
                <TabPanel value="3"> <p className='text-sm font-normal text-black leading-normal '>FIT</p></TabPanel>
            </TabContext>
        </Box>
    )
}

export const ProductTabs = React.memo(ProductTabsComp)
export default ProductTabs