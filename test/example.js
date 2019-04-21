const a = () => {
  console.log(a)
}
a()
const Decorators = () => {}

@Decorators({
  props: {}
})
// eslint-disable-next-line
class Test {
  name = 1

  test = () => {
    console.log('test methods')
  }
}
