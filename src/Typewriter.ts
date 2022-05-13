type QueueItem = () => Promise<void>

export default class Typewriter {
  
  #deletingSpeed: number;
  #element: HTMLElement;
  #loop: boolean;
  #queue: QueueItem[] = []
  #typingSpeed: number;

  constructor(
    parent: HTMLElement,
    { 
      deletingSpeed = 50, 
      loop = false, 
      typingSpeed = 50
    } = {}
  ) {
    this.#element = document.createElement("div")
    this.#element.classList.add("whitespace");
    parent.append(this.#element)
    this.#deletingSpeed = deletingSpeed;
    this.#loop = loop;
    this.#typingSpeed = typingSpeed;
  }

  typeString(string: string) {
    this.#addToQueue(resolve => {
      let i = 0
      const interval = setInterval(() => {
        this.#element.append(string[i])
        i++
        if (i >= string.length) {
          clearInterval(interval)
          resolve()
        }
      }, this.#typingSpeed)
    })
    return this
  }


  deleteChars(number: number) {
    this.#addToQueue(resolve => {
      let i = 0
      const interval = setInterval(() => {
        this.#element.innerText = this.#element.innerText.substring(
          0,
          this.#element.innerText.length - 1
        )
        i++
        if (i >= number) {
          clearInterval(interval)
          resolve()
        }
      }, this.#deletingSpeed)
    })
    return this
  }

  // We use the default delete speed of the constructor if nothing is passed in
  deleteAll(deletingSpeed = this.#deletingSpeed){
    console.log(deletingSpeed)
    return this
  }

  pauseFor(duration: number){
    console.log(duration)
    return this
  }

async start() {
  for(let callBack of this.#queue){
    await callBack()
  }
  return this
}

#addToQueue(callBack: (resolve: ()=> void)=> void){
  this.#queue.push(()=>{
    return new Promise(callBack)
  })
}

}
