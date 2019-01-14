open Atama;
open Jest;
open ExpectJs;

type person = {name: string};

describe("Atama", () => {
  test("#stream", () =>
    expect(() =>
      listen(~cb=() => Js.log("listened"))
    ) |> not |> toThrow
  );

  test("#connect", () =>
    expect(() => {
      let john = {name: "John"};
      connect(john);
    })
    |> not
    |> toThrow
  );

  test("#merge", () =>
    expect(() => {
      let person = {name: "John"};
      let onAdd = msg => Js.log(msg);
      merge(~state=person, ~added=onAdd);
    })
    |> not
    |> toThrow
  );

  test("#merge", () =>
    expect(() => {
      let person = {name: "John"};
      let callbackFn = msg => Js.log(msg);
      freeze(~state=person, ~cb=callbackFn, ());
    })
    |> not
    |> toThrow
  );

  test("#history", () =>
    expect(() =>
      history()
    ) |> not |> toThrow
  );
});