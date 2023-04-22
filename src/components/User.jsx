import React from 'react'

export const User = ({user}) => {
  return (
    <div>
        {
            user.length > 0 && <ol>
                {
                    user.map(item => (
                        <li key={item.Id}>
                            <h2>{item.Name}</h2>
                            <strong>{item.Course}</strong> <br />
                            <p>{item.Number}</p>
                            <p>
                                {
                                    item.Date
                                }
                            </p>
                        </li>
                    ))
                }
            </ol>
        }
    </div>
  )
}
