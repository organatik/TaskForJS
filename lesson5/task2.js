// Напиште код который выведет сотрудника который выполнил больше всех задач.var tasksCompleted 
var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
 
var max = 0;
var maxName = '';
for (var key in tasksCompleted){
  if(max < tasksCompleted[key]){
    max = tasksCompleted[key];
    maxName = key;
  }
}
console.log(maxName)