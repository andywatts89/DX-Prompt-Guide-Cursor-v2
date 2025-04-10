import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import FilterChips from './components/FilterChips';
import PromptGrid from './components/PromptGrid';
import WritingGuide from './components/WritingGuide';
import PromptDetail from './components/PromptDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <SearchSection />
                <FilterChips />
                <PromptGrid />
              </>
            } />
            <Route path="/writing-guide" element={<WritingGuide />} />
            <Route path="/prompt/:id" element={<PromptDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
