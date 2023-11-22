import React, { useState } from 'react';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col text-gray-800 ${isExpanded ? 'w-46' : 'w-16'} h-full transition-width duration-300 bg-white`}
    >
      {/* Logo and Workspace Section */}
      <div className="border-b border-gray-200 mb-1/3">
        <div
          className="cursor-pointer p-4 flex justify-between items-center"
          onClick={toggleNavbar}
        >
          {isExpanded ? (
            <>
              {/* Replace with your actual logo */}
              <img src="data:image/jpeg;base64,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" alt="Wayels" className="h-8" />
              <span className="text-purple-600 font-bold text-xl">Wayels</span>
              <div className='mt-[30%] -ml-[50%] text-gray-400 text-sm'>workspace</div>
              
            </>
          ) : null}
          <svg
            className={`w-6 h-6 text-[#9333ea] bg-[#c059ea] rounded-xl transition-transform ${isExpanded ? 'transform rotate-270 ' : 'transform rotate-270'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isExpanded ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
            ></path>
          </svg>
        </div>
      </div>
      <br/>

      {/* Requests and Notifications Section */}
      <div className={`flex-grow ${isExpanded ? 'block' : 'hidden'} p-4`}>
        <div className="flex  items-center mb-4">
          <img className='w-4 h-4 inline-block mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png" alt ="img" />
          <span className="text-sm font-sm text-gray-600">Requests</span>
          <span className="bg-gray-400 text-white text-xs ml-auto font-bold rounded-full px-1 py-1">10</span>
        </div>
        <div className="flex items-center mb-4">
        <img className='w-4 h-4 inline-block mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAABKSkqCgoLu7u709PTc3Nz4+PjFxcX7+/v39/ft7e3JyckmJibj4+O4uLjPz8/Y2NhnZ2eUlJQ9PT0xMTHn5+dCQkJaWlp8fHwXFxevr69OTk6Pj4/BwcGcnJykpKRycnIiIiJqamodHR1fX183NzcODg6IiIhUVFRaZGzRAAAHO0lEQVR4nO2d22LaMAyGWygUxvlQjt1IWljJ+7/gxrq2ICmJE0uys+m7bm39OHFk2Zbu7gzDMAzDUKWzGne749XDt9CGcNOZTQ5pdry/ZrdOF5NZJ7RpDEwPp1tptzylSTe0iR50k02BuC/m+1VoU+swPe+c5P0dy0XDhnJwKHo0c0QeBqHNdqbn9nBiNtPQpjuxH9XU92cg96HNLyXxkPfOIbSEQvZv3gJ/E+849qrMnkUch6GlkKwyJn0Xsgi/kAtGfRdiex1XS2aB9/fLcWhR1/jPoBRJaFmfPLq9gcen1jzdntP5pjVym3Ozx9DS3umWmrve7qeD20VhZ9BLXkvn3rcovNV9ibpDgSvWGZ6fiv99oickj+9F9p0m5Wvc1X5d1MRCQUMhp3zbls6+yWDxkt9MKml+Oc+5hs1nlRrq5bd0ErLdidznq/1Qua3uPK+xloDlbvR/5umrF2Hq5q0rg0nM8WM29X3KWc5vFkhiizRm1/NqNMc7emayuRL0I3X2bXZAO0ivHCZXY0sawhFooYfxO0PL/ma0eML1tBuo7N0MZX9m0o+o9oH1pCP9I5Prac2VBvWd4P2JKX9ecUI9E91zr8inRB9qkQ2i8zf+iDwlUWm52CemuupuaDkz3M1RoBuCFPcsE/sjJmxvh8IF4umRengmYZ5TvFj180SLwB+NtVhfBZ0mgr3hNaP4psYD6lI2yoADVaLd3RHTzItsfwOkUDg0tUIdSr/6eLaRdd7QeyHvZrzCLkW/GGPY21Kyt3f6aBAlzxmht1Bjfwg9p4KLYbRo0ll4o1CqXFcogi/X1TXo3ZD7JsKetAILbdDvSKoj+EI8SXUEQW6G1MkiuLL/IdQPBi65hWKL8Gsv9qxg0CD2Rbo5qL3vmFRlBoBOsEgnOXRB3xuJTuCcrbs5C/fxJI6Kwyi37mlQOI9LPKbAs9DeDQIKBVal30AX2gcI4U4Qfw890IP2RQIYeOP3+YFPmrF3UIb4MwR2fBP2DsoAi29+twb8hPrnP8FeDXt8aCbcfjnQaeSeCMD3KMRBJRCK5l5fgIkmYW7eBfAicsfAwL5ziKsfwKninmrANZEQ1+rAlhDz+huG9HhbdwMuEnlbB8F1/e/9BaCQ1/UH67MwZz7BApXXb/tx23iYyxAgvs97sQY4FGFOX28ljQAK9aJs14DNWV7fG0ShwtyEBD9zwto4cGlUj5h9AjxH3kARCMmGuZIEFPJuC4GdgzB358CE3mZt/L9TGOZeuSn0whSqYAq9MIUqmEIv/juFEse6yzGFXphCFUyhF6ZQhZ4p9MEUqmAKvTCFKphCL0yhCqbQC1OowtAU+mAKVTCFXphCFUyhF6ZQBVPohSlUwRR6EYXCqSn0wRSqYAq9MIUqAIVb1sa3ESrkvdYyj1Ahb3K627aDXF3D+Qw503/ANJRxKOS8NJNGqZAx0RjKJBqHQr5BxClZwyhEGbG47Ojj7IwyKX7KwBmoRywZBgmBCklESbAlHBIJgcGqTREVX/wlUgIDffCp5Kn+EkmBKumKSahyBX4SSYEK+S5zoSpEjXxyRlECeeavmuAMsV4WkSMYVCBOa+Y3iqTA0BWnaYm1fnayEtBLaIGco0gKjKGQNtcoUiUsduFH8AKPxGhH8ALHg0qOYCwCOUaREniMR2CeRPclD1WqJ6IRvEBKdC5eRlWxiWoEL5ASXRc91AMQm8AciW5mUkPIUm9bAbdB5C9erIdTqR2cqb9JuCzOiSJEDcIlNxBZNK4xuIRQYbLZZuGSPMoUxo2LwmbPNE7VtUIb6YWTU5OGttIDt3z7VGS5KTim6GruF9E522F3VN5YhByrJDsctjetZpG1w6SrNAzDMAyK2fl5uW7Xqd05OS2X2SK+sOUt/Y9w+abqNtXnsjQRMIuRr23jirtdVzmCdUtlVeQ6a7rzJsKFmyNrvMnWWbkND1QpZr25/ke1uorVuT3vXqH6GziTFyaZtgugYpL7mwi2SrTrgbkDdjzclzOgplsiZqEv2a2hznU+4EmneMcQlgt1TWwOa8VK1/quDzyIPXf7N1Q/XdZKL6CpbjUUYDlz3us+vKTAVqdys6judpjaEm6g+wIOw4GeUcUqvDVAYcjyaRGdgEzErfQBlmMt37JEhdMDXXVwBtlbMopYoE5F+vrgQSw6+L56wX8e9gyyA8RZ8+e8dTt1cidRtLUe5LYOeZCnC+s0X4h7In1nQ9j9WyM86DLMyL+L+Vv4ASyN/EHrMP2r8nG1p66GXIh9mnmnYPtxt8xO64Ktu1BXxqqyyJdQQuyhxE+gK+1KvKsmBP6OuxCmXl1N6khslEAU0Pj3BNJXBQvYhSnl5gXlkuXyHPmCgmZM3X2jCXWx2BviZjI5gPHGuEsZ007qDceGn4OZlmh8S0Jb6M8Yxomvn8+Gj98nve2RkJcloe71izCenDdfy/9lmkzjuK3JTWc17q7+qZEzDMMwjGbwC0pUYK6eC5UxAAAAAElFTkSuQmCC" alt ="img" />

          <span className="text-sm font-sm text-gray-600">Notifications</span>
          <span className="bg-gray-400 ml-auto text-white text-xs  font-bold rounded-full px-1.5 py-1">1</span>
        </div>
      </div>
      <br/>

      {/* Navigation Items Section */}
      {isExpanded && (
        <div className="flex-grow p-4 -mt-[70%] hover:border-l-blue-900 ">
          <div className="flex flex-col space-y-4 ">
            <div className='hover:bg-[#a596d6]'>
              <img className='w-4 h-4 inline-block mr-2' src="data:image/png;base64,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" alt="home" />
              <span  className="text-gray-700 text-sm mt-1 font-medium">Dashboard</span>
            </div>
            <div className='hover:bg-[#a596d6]'>
              <img className='w-4 h-4 inline-block mr-2' src ="data:image/png;base64,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" />
              <a href="#" className="text-gray-700 text-sm font-medium">Shipments</a>           
            </div>
            <div className='flex hover:bg-[#a596d6]'>
              <img  className = "w-4 h-4 inline-block mr-2"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADb29s9PT3W1taOjo77+/sbGxvq6urU1NT4+Pji4uL09PRra2uDg4Oenp7MzMyUlJS+vr44ODilpaVnZ2dzc3MnJydOTk7t7e20tLStra1eXl6GhoZTU1O7u7t5eXkwMDAjIyMQEBBaWlpCQkLGxsYWFhYzMzMkJCSVZiQwAAAHfklEQVR4nO2daWOyOhBGKwoiKooboiJQFX3//x+8YAu1sjwTwqK9cz6qYA7LZBJg+PhgGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGKYTxp55+VzPRlrXDWmEwezQSwnMhd51g+rECa1jL8N1uht33bI6cBbmv6xdyvG9D1l9t7FL7BK2VjjpuqkVGO+nBLmfQ9ZcOF03WYDB6nAS0fvG3uyVrptOYLBaV5D74TwbvPCJOZqdkcDndIN379aav6DlYJbTIWQafo8ojmf2oeXFfaETUxut4L47Pu0WY25doKVtLroPshqhpYfVIHdZg3LO3kyvu31J2A+nNQqPymo6RJYnf9d+jhfZbeG+owb/KDOA+9LetJjjTUI3QA06zgS7tii7W0LNaJs1HmSN0IUNCWbzaiufEFYuvu0EiKL8DTagdz9tqgcHjXD4987W3KhR7I7j+WVDhAyBG0ocT6MZtrxYFY+UHHRv8ylil3Cc5fcSJEj7cqvKj0qiMFcliU5Z72Xi/AgnSr2lhOV4j4d3W2uFGhGYUht6gBOm3tIU7zAjO7jeaHz+9eMR7PmXqlRoUPZreCQNBdKCMWFovl4pT3km7CO3MqclbZvbU3hSaApOFaOBan52MVn4aMusCxYlEkUFHPOKE0VK9LJRHqzv0OTFcCOXZFKmR06H5AR6REGL3ahjGWV1AKu6ygWfeF/CdF3Q8CQ6UhvNUPC5qXI9tr4vP59EDM+rSiePMVdRlimVE3yUH7Fkw6En04Qo+KDQIGs5KAge2d6paB8Oi0InFRx8epXn95XifCN7VpWehxvJqYQxDD6RpWCIBSeioGFPLv+L0UZ5l2d+EbjUeObs/ACsLLtLYG8RW8qOy+YqCrG2izbkZOFSroZkjwiKYcxxJTfGJoTY4qGfFqp4qhUbKjCRPlTrP1ImCxPthuy89wTmXEs31CmG/a8mgCh/khv5RYECB5+tleReRmgGoD2+dz+60w+y+yA1XH9/4MC+LHBDuRA7wLMVRzXc+eiw3njp1k4P4hLD6a8NjYYathlKBR+DMDVZyuF3d50Ol0sMN89fwMPpYsmlJbrY1dQfztl8KF1TiaGf04YBDD45fybEiDBV+ouof85bD8XQzG/CJITd0EFyfLvCs2tfnPzCS2/pRIC4YQwOab2NxGxwhAc782F5eucnv8v22qmhW94GfNLY5qJa8NFCH0yq446YYqjipuDhQl94ck1BY2baMMusxzAGX9bekq+h4N7/RL2yX6PhlyWKDTj4OKRrBkNqk1yCoUU3/Ihn6GAiXRx8orQJzih1bhgzgSE2yM5k4YuFfSt8FcN7gz2UxS7V9FwyQhUEze9k8CpsqDZmGINDbDyzj69ybNJhS7qXazWcVTaMIczIlPI7NKXbQtww27XUZBhDGBTl0lefbzZN1/NihjGUS7iP5N9K24xh9fPwCfLQ7yEGPSFuaLVpGOOgK27lV4jTtKlWQ4GchoZTdC/AFd6Wko7YX9swZpyZoCZdLH0jw/s/rJIO/Eqdc30zw5/u7UJd4O0Mk6m+PnWBw//HMOeCZz7vZvid556mO+oS72YYj9jF7lB5N8O58CwsJWt7JUNx2JANJWnB0GVDNpSjTcPszYnUKzMysGENsGFMyRVSWVowNNmQDeVgwxqgGPrN/X0Lhj4b/h3DkrzUb+7v2bAG2JANJXkRw+c7aGukBcMNG7KhHGxYA2zIhpKwYQ2kd0eW3Js4zVmuJtiwBtiQDSX5+4ZLNpSHDf+QIeFJ5wZowXDdreGNDeWhGB6a+/ugecP0jtSSmgotGC6b+4uODe0WDUuqt/Sbq/XavOG4TzCMbzqWrOpRRLOG+n768OQKrjFU/FB/dT4bM3Q8/6n9pEpYxU9cVaQZQy33CbJsywtqDG3z6vNVJXms+VbbGrXCJ1Kzvy2polSxJF2W5KmgmgxLn+TM/hzUiRIuNpZHEghqMIQ1ZbKLaDv/Wr7MULrMfU2GDq5wftjnL4orZ/algk+ylqD6KiYeLJJ6Bk/GKbBub/VispKGxhw9xh+XCKOsScP1tKvVM5MxxK8pCARf/DGHtd/Ei8kmS9qCyylwi9+q1XydhKhqm2CxnSqG+u4xF8vFl6pb6cB6FwLFdkQN9R2qfXKt56UQuHDSdkayTH7+SfitgSu7SFaWfoJStQ2e6FRDAxeAlC1dmw8OsaAwZvKzsqd6izPNlGWNr0XIYOAQey4uDwUN8asC/rXx/iBC1baCLDb5+pr3pb5H58GnXNAUIzvifMb2d5mNnXx3ev4iShdRWJEs5V6JKMSCXN1+6ofTLx4/dBZoY0WZZndvvBzvURa7dNOwoGUNcabZt7p/ByTOGLdf5XUmvwy1gYWC1kWVK45aI8YctjYKsc6PYUmp8W+C17FLiLJYwRKkhbzEK+XyMXAdfchUrj5oC+gemg4ppskXctWLjvu3DD+1rd8F9IqNRy4NvGasHfCkz3182XUzJVFK8k38noB3IW90efszdgmPr5J64Q5PkmgMEWzV+R+1YxiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYZjX5z+GtIdfzFVh4gAAAABJRU5ErkJggg==" alt="parcel" />
              <a href="#" className="text-gray-700 text-sm font-medium">Parcels</a>
              <span className="bg-red-400 ml-auto text-white text-xs font-bold rounded-full px-1.5 py-1">2</span>

            </div>
            <div className='hover:bg-[#a596d6]'>
              <img className = "w-4 h-4 inline-block mr-2" src="https://www.svgrepo.com/show/26990/flag.svg" alt="brancj" />
              <a href="#" className="text-gray-700 text-sm font-medium">Branches</a>
              </div>
              <div className='hover:bg-[#a596d6]'>
                <img className = "w-4 h-4 inline-block mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi1Njy8LfAdxacvLOE3qVwKn5oi9Jpkluyw&usqp=CAU" alt="img"/>
                <span className="text-gray-700 text-sm font-medium">Clients</span>
            </div>
          </div>
        </div>
      )}

      {/* Create Shipment Button and User Information */}
      {isExpanded && (
        <div className="px-4 py-2">
          <button
            type="button"
            className="text-white border-b border-gray-400  bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 mb-2 transition-colors duration-300"
          >
            + Create shipment
          </button>
          <div className="flex items-center pt-2">
            <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">DS</span> {/* Initials for Darrell Steward */}
            </div>
            <div className="flex ml-3 items-center">
             <div className='flex flex-col' >
             <div className="text-[10px] font-bold text-gray-800">Darrell Steward</div>
               <div className="text-xs text-gray-600">Manager</div>
              </div>
             <img src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-13-512.png" alt="opt" className="ml-6 -mt-[15%] w-2 h-2" />
           </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

