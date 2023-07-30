import React from 'react';

const HomePage = () => {
    return (
        <div className='container'>
            <div className='py-4'>
                <table className='table boder shadow'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Second</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>Test 1</th>
                            <th>Test 2</th>
                        </tr>
                    </tbody>                
                </table>
            </div>
        </div>
    )
}

export default HomePage