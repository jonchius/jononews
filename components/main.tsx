/*
jononews by @jonchius
/components/main.tsx
main or div html containers
*/

export const MainDiv = ({children, className}: any) => {
  return (
    <main className={`p-5 ${className}`} id="main-content" tabIndex={-1}>
      <div className="w-screen-xl max-w-screen-xl mx-auto">
        {children}
      </div>
    </main>
  )
}

export const MainList = ({children}: any ) => {
  return (
    <div className="main-list grid grid-cols-1 gap-1">
      {children}
    </div>
  )
}