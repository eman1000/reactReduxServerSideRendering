import React                  from 'react';
import TodosView              from './TodosView';
import TodosForm              from './TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions       from '../actions/TodoActions';
import { connect }            from 'react-redux';
//connect(state => ({ todos: state.todos }))
class Home extends React.Component {

  render() {
    const { todos, dispatch } = this.props;
    
    return (
      <div id="todo-list">
        
        <TodosView todos={todos}
          {...bindActionCreators(TodoActions, dispatch)} />
        <TodosForm
          {...bindActionCreators(TodoActions, dispatch)} />
      </div>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
  //startup: () => dispatch(StartupActions.startup())
});

const mapStateToProps = (state) => ({
  name:state.name,
  todos: state.todos
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);