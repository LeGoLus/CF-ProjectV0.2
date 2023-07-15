const people = [
    {
      name: 'KRIT ZA5555',
      role: 'KRIT@gmail.com',
      nickname: 'KRIT',
      hiredate: '01/01/1995',
      position: 'CEO',
      phonenumber: '094-00999499',
      gender: 'Male',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'KRIT ZA5555',
        role: 'KRIT@gmail.com',
        nickname: 'KRIT',
        hiredate: '01/01/1995',
        position: 'CEO',
        phonenumber: '094-00999499',
        gender: 'Male',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },

    {
        name: 'KRIT ZA5555',
        role: 'KRIT@gmail.com',
        nickname: 'KRIT',
        hiredate: '01/01/1995',
        position: 'CEO',
        phonenumber: '094-00999499',
        gender: 'Male',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    
  ]
  
  export default function ExcutiveUser() {
    return (
      <div >
        
          <ul role="list" className="grid grid-cols-3 gap-10 h-full">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex h-60 items-center gap-2 bg-white drop-shadow rounded">
                  <img className="h-16 w-16 rounded-full items-center" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold leading-3 tracking-tight text-green-700">{person.name}</h3>
                    <p className="text-sm leading-10 text-gray-700">{person.role}</p>
                    <p className="text-sm leading-5 text-gray-700">{person.nickname}</p>
                    <p className="text-sm leading-5 text-gray-700">{person.hiredate}</p>
                    <p className="text-sm leading-5 text-gray-700">{person.position}</p>
                    <p className="text-sm leading-5 text-gray-700">{person.phonenumber}</p>
                    <p className="text-sm leading-5 text-gray-700">{person.gender}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        
      </div>
    )
  }
  