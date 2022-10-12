import React from 'react';
import FragmentComp from './fragment';

function ParentTable(props) {
    return (
        <table>
            <tbody>
                <FragmentComp />
            </tbody>
        </table>
    );
}

export default ParentTable;