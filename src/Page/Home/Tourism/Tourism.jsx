import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview';
import OurPackages from './OurPackages/OurPackages';


const Tourism = () => {
    return (
        <div className=" py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Tourism and Travel Guide Section</h2>
                <Tabs>
                    <TabList className="flex mb-6">
                        <Tab className="border-b-2 border-transparent hover:border-blue-500 text-gray-600 hover:text-blue-500 py-2 px-4 cursor-pointer">Overview</Tab>
                        <Tab className="border-b-2 border-transparent hover:border-blue-500 text-gray-600 hover:text-blue-500 py-2 px-4 cursor-pointer">Our Packages</Tab>
                        <Tab className="border-b-2 border-transparent hover:border-blue-500 text-gray-600 hover:text-blue-500 py-2 px-4 cursor-pointer">Meet Our Tour Guides</Tab>
                    </TabList>

                    <TabPanel>
                        <Overview></Overview>
                    </TabPanel>
                    <TabPanel>
                        <OurPackages></OurPackages>
                    </TabPanel>
                    <TabPanel>
                        <p>Content for Meet Our Tour Guides Tab goes here.</p>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Tourism;
// npm install react-tabs
