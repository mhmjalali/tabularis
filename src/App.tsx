import TopOfTable from './components/TopOfTable';
import Table from './components/Table';
import BottomOfTable from './components/BottomOfTable';

const fakeCoulmn = [
    {
        accessKey: 'felan',
        id: 'felan',
        header: 'متن هدر خود',
        filterable: true,
        dataType: 'text', // can be text, numeric, date
        filterType: 'equals' // can be equals, notEquals, greatherThan, lessThan, contains, between
    }
];
const fakeData = [
    {}
];

function Tabularis() {
    return (
        <>
            <TopOfTable/>
            <Table/>
            <BottomOfTable/>
        </>
    );
}

export default Tabularis;