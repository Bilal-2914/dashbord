import React from 'react'
import { Search } from 'lucide-react'

const SearchBar: React.FC = () => {
    return (
        <div className="relative flex items-center">
            <input
                type="text"
                placeholder="Search"
                className="focus:outline-none  focus:border-transparent"
                style={{
                    width: '318px',
                    height: '34px',
                    borderRadius: '8px',
                    border: '1px solid #E0E8ED',
                    backgroundColor: '#F5F8FA',
                    paddingLeft: '32px',
                    paddingRight: '16px',
                    fontSize: '12px',

                    fontWeight: 400,
                    fontStyle: 'Regular',
                    lineHeight: '16px',
                    letterSpacing: '0%',
                    textAlign: 'left',
                    color: '#8597A8'
                }}
            />
            <div
                className="absolute flex items-center justify-center"
                style={{

                    width: '41px',
                    height: '16px'
                }}
            >
                <Search
                    size={12}
                    className="text-[#8597A8]"
                    style={{
                        width: '16px',
                        height: '16px'
                    }}
                />
            </div>
        </div>
    )
}

export default SearchBar