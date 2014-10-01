
declare module Plottable {
    module Util {
        module Methods {
            /**
             * Checks if x is between a and b.
             *
             * @param {number} x The value to test if in range
             * @param {number} a The beginning of the (inclusive) range
             * @param {number} b The ending of the (inclusive) range
             * @return {boolean} Whether x is in [a, b]
             */
            function inRange(x: number, a: number, b: number): boolean;
            /** Print a warning message to the console, if it is available.
             *
             * @param {string} The warnings to print
             */
            function warn(warning: string): void;
            /**
             * Takes two arrays of numbers and adds them together
             *
             * @param {number[]} alist The first array of numbers
             * @param {number[]} blist The second array of numbers
             * @return {number[]} An array of numbers where x[i] = alist[i] + blist[i]
             */
            function addArrays(alist: number[], blist: number[]): number[];
            /**
             * Takes two sets and returns the intersection
             *
             * Due to the fact that D3.Sets store strings internally, return type is always a string set
             *
             * @param {D3.Set<T>} set1 The first set
             * @param {D3.Set<T>} set2 The second set
             * @return {D3.Set<string>} A set that contains elements that appear in both set1 and set2
             */
            function intersection<T>(set1: D3.Set<T>, set2: D3.Set<T>): D3.Set<string>;
            /**
             * Take an accessor object (may be a string to be made into a key, or a value, or a color code)
             * and "activate" it by turning it into a function in (datum, index, metadata)
             */
            function _accessorize(accessor: any): IAccessor;
            /**
             * Takes two sets and returns the union
             *
             * Due to the fact that D3.Sets store strings internally, return type is always a string set
             *
             * @param {D3.Set<T>} set1 The first set
             * @param {D3.Set<T>} set2 The second set
             * @return {D3.Set<string>} A set that contains elements that appear in either set1 or set2
             */
            function union<T>(set1: D3.Set<T>, set2: D3.Set<T>): D3.Set<string>;
            /**
             * Populates a map from an array of keys and a transformation function.
             *
             * @param {string[]} keys The array of keys.
             * @param {(string) => T} transform A transformation function to apply to the keys.
             * @return {D3.Map<T>} A map mapping keys to their transformed values.
             */
            function populateMap<T>(keys: string[], transform: (key: string) => T): D3.Map<T>;
            /**
             * Take an accessor object, activate it, and partially apply it to a Plot's datasource's metadata
             */
            function _applyAccessor(accessor: IAccessor, plot: Abstract.Plot): (d: any, i: number) => any;
            /**
             * Take an array of values, and return the unique values.
             * Will work iff ∀ a, b, a.toString() == b.toString() => a == b; will break on Object inputs
             *
             * @param {T[]} values The values to find uniqueness for
             * @return {T[]} The unique values
             */
            function uniq<T>(arr: T[]): T[];
            /**
             * Creates an array of length `count`, filled with value or (if value is a function), value()
             *
             * @param {any} value The value to fill the array with, or, if a function, a generator for values (called with index as arg)
             * @param {number} count The length of the array to generate
             * @return {any[]}
             */
            function createFilledArray<T>(value: T, count: number): T[];
            function createFilledArray<T>(func: (index?: number) => T, count: number): T[];
            /**
             * @param {T[][]} a The 2D array that will have its elements joined together.
             * @return {T[]} Every array in a, concatenated together in the order they appear.
             */
            function flatten<T>(a: T[][]): T[];
            /**
             * Check if two arrays are equal by strict equality.
             */
            function arrayEq<T>(a: T[], b: T[]): boolean;
            /**
             * @param {any} a Object to check against b for equality.
             * @param {any} b Object to check against a for equality.
             *
             * @returns {boolean} whether or not two objects share the same keys, and
             *          values associated with those keys. Values will be compared
             *          with ===.
             */
            function objEq(a: any, b: any): boolean;
            function max(arr: number[], default_val?: number): number;
            function max<T>(arr: T[], acc: (x: T) => number, default_val?: number): number;
            function min(arr: number[], default_val?: number): number;
            function min<T>(arr: T[], acc: (x: T) => number, default_val?: number): number;
        }
    }
}


declare module Plottable {
    module Util {
        module OpenSource {
            /**
             * Returns the sortedIndex for inserting a value into an array.
             * Takes a number and an array of numbers OR an array of objects and an accessor that returns a number.
             * @param {number} value: The numerical value to insert
             * @param {any[]} arr: Array to find insertion index, can be number[] or any[] (if accessor provided)
             * @param {IAccessor} accessor: If provided, this function is called on members of arr to determine insertion index
             * @returns {number} The insertion index.
             * The behavior is undefined for arrays that are unsorted
             * If there are multiple valid insertion indices that maintain sorted order (e.g. addign 1 to [1,1,1,1,1]) then
             * the behavior must satisfy that the array is sorted post-insertion, but is otherwise unspecified.
             * This is a modified version of Underscore.js's implementation of sortedIndex.
             * Underscore.js is released under the MIT License:
             *  Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative
             *  Reporters & Editors
             *
             *  Permission is hereby granted, free of charge, to any person
             *  obtaining a copy of this software and associated documentation
             *  files (the "Software"), to deal in the Software without
             *  restriction, including without limitation the rights to use,
             *  copy, modify, merge, publish, distribute, sublicense, and/or sell
             *  copies of the Software, and to permit persons to whom the
             *  Software is furnished to do so, subject to the following
             *  conditions:
             *
             *  The above copyright notice and this permission notice shall be
             *  included in all copies or substantial portions of the Software.
             *
             *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
             *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
             *  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
             *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
             *  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
             *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
             *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
             *  OTHER DEALINGS IN THE SOFTWARE.
             */
            function sortedIndex(val: number, arr: number[]): number;
            function sortedIndex(val: number, arr: any[], accessor: IAccessor): number;
        }
    }
}


declare module Plottable {
    module Util {
        class IDCounter {
            increment(id: any): number;
            decrement(id: any): number;
            get(id: any): number;
        }
    }
}


declare module Plottable {
    module Util {
        /**
         * An associative array that can be keyed by anything (inc objects).
         * Uses pointer equality checks which is why this works.
         * This power has a price: everything is linear time since it is actually backed by an array...
         */
        class StrictEqualityAssociativeArray {
            /**
             * Set a new key/value pair in the store.
             *
             * @param {any} key Key to set in the store
             * @param {any} value Value to set in the store
             * @return {boolean} True if key already in store, false otherwise
             */
            set(key: any, value: any): boolean;
            /**
             * Get a value from the store, given a key.
             *
             * @param {any} key Key associated with value to retrieve
             * @return {any} Value if found, undefined otherwise
             */
            get(key: any): any;
            /**
             * Test whether store has a value associated with given key.
             *
             * Will return true if there is a key/value entry,
             * even if the value is explicitly `undefined`.
             *
             * @param {any} key Key to test for presence of an entry
             * @return {boolean} Whether there was a matching entry for that key
             */
            has(key: any): boolean;
            /**
             * Return an array of the values in the key-value store
             *
             * @return {any[]} The values in the store
             */
            values(): any[];
            /**
             * Return an array of keys in the key-value store
             *
             * @return {any[]} The keys in the store
             */
            keys(): any[];
            /**
             * Execute a callback for each entry in the array.
             *
             * @param {(key: any, val?: any, index?: number) => any} callback The callback to eecute
             * @return {any[]} The results of mapping the callback over the entries
             */
            map(cb: (key?: any, val?: any, index?: number) => any): any[];
            /**
             * Delete a key from the key-value store. Return whether the key was present.
             *
             * @param {any} The key to remove
             * @return {boolean} Whether a matching entry was found and removed
             */
            delete(key: any): boolean;
        }
    }
}


declare module Plottable {
    module Util {
        class Cache<T> {
            /**
             * @constructor
             *
             * @param {string} compute The function whose results will be cached.
             * @param {string} [canonicalKey] If present, when clear() is called,
             *        this key will be re-computed. If its result hasn't been changed,
             *        the cache will not be cleared.
             * @param {(v: T, w: T) => boolean} [valueEq]
             *        Used to determine if the value of canonicalKey has changed.
             *        If omitted, defaults to === comparision.
             */
            constructor(compute: (k: string) => T, canonicalKey?: string, valueEq?: (v: T, w: T) => boolean);
            /**
             * Attempt to look up k in the cache, computing the result if it isn't
             * found.
             *
             * @param {string} k The key to look up in the cache.
             * @return {T} The value associated with k; the result of compute(k).
             */
            get(k: string): T;
            /**
             * Reset the cache empty.
             *
             * If canonicalKey was provided at construction, compute(canonicalKey)
             * will be re-run. If the result matches what is already in the cache,
             * it will not clear the cache.
             *
             * @return {Cache<T>} The calling Cache.
             */
            clear(): Cache<T>;
        }
    }
}


declare module Plottable {
    module Util {
        module Text {
            var HEIGHT_TEXT: string;
            interface Dimensions {
                width: number;
                height: number;
            }
            interface TextMeasurer {
                (s: string): Dimensions;
            }
            /**
             * Returns a quasi-pure function of typesignature (t: string) => Dimensions which measures height and width of text
             * in the given text selection
             *
             * @param {D3.Selection} selection: A temporary text selection that the string will be placed into for measurement.
             *                                  Will be removed on function creation and appended only for measurement.
             * @returns {Dimensions} width and height of the text
             */
            function getTextMeasurer(selection: D3.Selection): TextMeasurer;
            /**
             * This class will measure text by measuring each character individually,
             * then adding up the dimensions. It will also cache the dimensions of each
             * letter.
             */
            class CachingCharacterMeasurer {
                /**
                 * @param {string} s The string to be measured.
                 * @return {Dimensions} The width and height of the measured text.
                 */
                measure: TextMeasurer;
                /**
                 * @param {D3.Selection} textSelection The element that will have text inserted into
                 *        it in order to measure text. The styles present for text in
                 *        this element will to the text being measured.
                 */
                constructor(textSelection: D3.Selection);
                /**
                 * Clear the cache, if it seems that the text has changed size.
                 */
                clear(): CachingCharacterMeasurer;
            }
            /**
             * Gets a truncated version of a sting that fits in the available space, given the element in which to draw the text
             *
             * @param {string} text: The string to be truncated
             * @param {number} availableWidth: The available width, in pixels
             * @param {D3.Selection} element: The text element used to measure the text
             * @returns {string} text - the shortened text
             */
            function getTruncatedText(text: string, availableWidth: number, measurer: TextMeasurer): string;
            /**
             * Takes a line, a width to fit it in, and a text measurer. Will attempt to add ellipses to the end of the line,
             * shortening the line as required to ensure that it fits within width.
             */
            function _addEllipsesToLine(line: string, width: number, measureText: TextMeasurer): string;
            function writeLineHorizontally(line: string, g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string): {
                width: number;
                height: number;
            };
            function writeLineVertically(line: string, g: D3.Selection, width: number, height: number, xAlign?: string, yAlign?: string, rotation?: string): {
                width: number;
                height: number;
            };
            interface IWriteTextResult {
                textFits: boolean;
                usedWidth: number;
                usedHeight: number;
            }
            interface IWriteOptions {
                g: D3.Selection;
                xAlign: string;
                yAlign: string;
            }
            /**
             * @param {write} [IWriteOptions] If supplied, the text will be written
             *        To the given g. Will align the text vertically if it seems like
             *        that is appropriate.
             * Returns an IWriteTextResult with info on whether the text fit, and how much width/height was used.
             */
            function writeText(text: string, width: number, height: number, tm: TextMeasurer, horizontally?: boolean, write?: IWriteOptions): IWriteTextResult;
        }
    }
}


declare module Plottable {
    module Util {
        module WordWrap {
            interface IWrappedText {
                originalText: string;
                lines: string[];
                textFits: boolean;
            }
            /**
             * Takes a block of text, a width and height to fit it in, and a 2-d text measurement function.
             * Wraps words and fits as much of the text as possible into the given width and height.
             */
            function breakTextToFitRect(text: string, width: number, height: number, measureText: Text.TextMeasurer): IWrappedText;
            /**
             * Determines if it is possible to fit a given text within width without breaking any of the words.
             * Simple algorithm, split the text up into tokens, and make sure that the widest token doesn't exceed
             * allowed width.
             */
            function canWrapWithoutBreakingWords(text: string, width: number, widthMeasure: (s: string) => number): boolean;
        }
    }
}

declare module Plottable {
    module Util {
        module DOM {
            /**
             * Gets the bounding box of an element.
             * @param {D3.Selection} element
             * @returns {SVGRed} The bounding box.
             */
            function getBBox(element: D3.Selection): SVGRect;
            var POLYFILL_TIMEOUT_MSEC: number;
            function requestAnimationFramePolyfill(fn: () => any): void;
            function isSelectionRemovedFromSVG(selection: D3.Selection): boolean;
            function getElementWidth(elem: HTMLScriptElement): number;
            function getElementHeight(elem: HTMLScriptElement): number;
            function getSVGPixelWidth(svg: D3.Selection): number;
            function translate(s: D3.Selection, x?: number, y?: number): any;
            function boxesOverlap(boxA: ClientRect, boxB: ClientRect): boolean;
        }
    }
}


declare module Plottable {
    interface Formatter {
        (d: any): string;
    }
    var MILLISECONDS_IN_ONE_DAY: number;
    class Formatters {
        /**
         * Creates a formatter for currency values.
         *
         * @param {number} [precision] The number of decimal places to show (default 2).
         * @param {string} [symbol] The currency symbol to use (default "$").
         * @param {boolean} [prefix] Whether to prepend or append the currency symbol (default true).
         * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
         *
         * @returns {Formatter} A formatter for currency values.
         */
        static currency(precision?: number, symbol?: string, prefix?: boolean, onlyShowUnchanged?: boolean): (d: any) => string;
        /**
         * Creates a formatter that displays exactly [precision] decimal places.
         *
         * @param {number} [precision] The number of decimal places to show (default 3).
         * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
         *
         * @returns {Formatter} A formatter that displays exactly [precision] decimal places.
         */
        static fixed(precision?: number, onlyShowUnchanged?: boolean): (d: any) => string;
        /**
         * Creates a formatter that formats numbers to show no more than
         * [precision] decimal places. All other values are stringified.
         *
         * @param {number} [precision] The number of decimal places to show (default 3).
         * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
         *
         * @returns {Formatter} A formatter for general values.
         */
        static general(precision?: number, onlyShowUnchanged?: boolean): (d: any) => string;
        /**
         * Creates a formatter that stringifies its input.
         *
         * @returns {Formatter} A formatter that stringifies its input.
         */
        static identity(): (d: any) => string;
        /**
         * Creates a formatter for percentage values.
         * Multiplies the input by 100 and appends "%".
         *
         * @param {number} [precision] The number of decimal places to show (default 0).
         * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
         *
         * @returns {Formatter} A formatter for percentage values.
         */
        static percentage(precision?: number, onlyShowUnchanged?: boolean): (d: any) => string;
        /**
         * Creates a formatter for values that displays [precision] significant figures
         * and puts SI notation.
         *
         * @param {number} [precision] The number of significant figures to show (default 3).
         *
         * @returns {Formatter} A formatter for SI values.
         */
        static siSuffix(precision?: number): (d: any) => string;
        /**
         * Creates a formatter that displays dates.
         *
         * @returns {Formatter} A formatter for time/date values.
         */
        static time(): (d: any) => string;
        /**
         * Creates a formatter for relative dates.
         *
         * @param {number} baseValue The start date (as epoch time) used in computing relative dates (default 0)
         * @param {number} increment The unit used in calculating relative date values (default MILLISECONDS_IN_ONE_DAY)
         * @param {string} label The label to append to the formatted string (default "")
         *
         * @returns {Formatter} A formatter for time/date values.
         */
        static relativeDate(baseValue?: number, increment?: number, label?: string): (d: any) => string;
    }
}


declare module Plottable {
    var version: string;
}


declare module Plottable {
    module Core {
        class Colors {
            static CORAL_RED: string;
            static INDIGO: string;
            static ROBINS_EGG_BLUE: string;
            static FERN: string;
            static BURNING_ORANGE: string;
            static ROYAL_HEATH: string;
            static CONIFER: string;
            static CERISE_RED: string;
            static BRIGHT_SUN: string;
            static JACARTA: string;
            static PLOTTABLE_COLORS: string[];
        }
    }
}


declare module Plottable {
    module Abstract {
        class PlottableObject {
            _plottableID: number;
        }
    }
}


declare module Plottable {
    module Core {
        /**
         * This interface represents anything in Plottable which can have a listener attached.
         * Listeners attach by referencing the Listenable's broadcaster, and calling registerListener
         * on it.
         *
         * e.g.:
         * listenable: Plottable.IListenable;
         * listenable.broadcaster.registerListener(callbackToCallOnBroadcast)
         */
        interface IListenable {
            broadcaster: Broadcaster;
        }
        /**
         * This interface represents the callback that should be passed to the Broadcaster on a Listenable.
         *
         * The callback will be called with the attached Listenable as the first object, and optional arguments
         * as the subsequent arguments.
         *
         * The Listenable is passed as the first argument so that it is easy for the callback to reference the
         * current state of the Listenable in the resolution logic.
         */
        interface IBroadcasterCallback {
            (listenable: IListenable, ...args: any[]): any;
        }
        /**
         * The Broadcaster class is owned by an IListenable. Third parties can register and deregister listeners
         * from the broadcaster. When the broadcaster.broadcast method is activated, all registered callbacks are
         * called. The registered callbacks are called with the registered Listenable that the broadcaster is attached
         * to, along with optional arguments passed to the `broadcast` method.
         *
         * The listeners are called synchronously.
         */
        class Broadcaster extends Abstract.PlottableObject {
            listenable: IListenable;
            /**
             * Construct a broadcaster, taking the Listenable that the broadcaster will be attached to.
             *
             * @constructor
             * @param {IListenable} listenable The Listenable-object that this broadcaster is attached to.
             */
            constructor(listenable: IListenable);
            /**
             * Registers a callback to be called when the broadcast method is called. Also takes a key which
             * is used to support deregistering the same callback later, by passing in the same key.
             * If there is already a callback associated with that key, then the callback will be replaced.
             *
             * @param key The key associated with the callback. Key uniqueness is determined by deep equality.
             * @param {IBroadcasterCallback} callback A callback to be called when the Scale's domain changes.
             * @returns {Broadcaster} this object
             */
            registerListener(key: any, callback: IBroadcasterCallback): Broadcaster;
            /**
             * Call all listening callbacks, optionally with arguments passed through.
             *
             * @param ...args A variable number of optional arguments
             * @returns {Broadcaster} this object
             */
            broadcast(...args: any[]): Broadcaster;
            /**
             * Deregisters the callback associated with a key.
             *
             * @param key The key to deregister.
             * @returns {Broadcaster} this object
             */
            deregisterListener(key: any): Broadcaster;
            /**
             * Deregisters all listeners and callbacks associated with the broadcaster.
             *
             * @returns {Broadcaster} this object
             */
            deregisterAllListeners(): void;
        }
    }
}


declare module Plottable {
    class DataSource extends Abstract.PlottableObject implements Core.IListenable {
        broadcaster: any;
        /**
         * Creates a new DataSource.
         *
         * @constructor
         * @param {any[]} data
         * @param {any} metadata An object containing additional information.
         */
        constructor(data?: any[], metadata?: any);
        /**
         * Gets the data.
         *
         * @returns {any[]} The current data.
         */
        data(): any[];
        /**
         * Sets new data.
         *
         * @param {any[]} data The new data.
         * @returns {DataSource} The calling DataSource.
         */
        data(data: any[]): DataSource;
        /**
         * Gets the metadata.
         *
         * @returns {any} The current metadata.
         */
        metadata(): any;
        /**
         * Sets the metadata.
         *
         * @param {any} metadata The new metadata.
         * @returns {DataSource} The calling DataSource.
         */
        metadata(metadata: any): DataSource;
        _getExtent(accessor: IAccessor): any[];
    }
}


declare module Plottable {
    module Abstract {
        class Component extends PlottableObject {
            static AUTORESIZE_BY_DEFAULT: boolean;
            element: D3.Selection;
            content: D3.Selection;
            backgroundContainer: D3.Selection;
            foregroundContainer: D3.Selection;
            clipPathEnabled: boolean;
            xOrigin: number;
            yOrigin: number;
            _parent: ComponentContainer;
            _xAlignProportion: number;
            _yAlignProportion: number;
            _fixedHeightFlag: boolean;
            _fixedWidthFlag: boolean;
            _isSetup: boolean;
            _isAnchored: boolean;
            /**
             * Attaches the Component as a child of a given a DOM element. Usually only directly invoked on root-level Components.
             *
             * @param {D3.Selection} element A D3 selection consisting of the element to anchor under.
             */
            _anchor(element: D3.Selection): void;
            /**
             * Creates additional elements as necessary for the Component to function.
             * Called during _anchor() if the Component's element has not been created yet.
             * Override in subclasses to provide additional functionality.
             */
            _setup(): void;
            _requestedSpace(availableWidth: number, availableHeight: number): ISpaceRequest;
            /**
             * Computes the size, position, and alignment from the specified values.
             * If no parameters are supplied and the component is a root node,
             * they are inferred from the size of the component's element.
             *
             * @param {number} xOrigin
             * @param {number} yOrigin
             * @param {number} availableWidth
             * @param {number} availableHeight
             */
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): void;
            /**
             * Renders the component.
             */
            _render(): void;
            _scheduleComputeLayout(): void;
            _doRender(): void;
            _invalidateLayout(): void;
            /**
             * Renders the Component into a given DOM element.
             *
             * @param {String|D3.Selection} element A D3 selection or a selector for getting the element to render into.
             * @return {Component} The calling component.
             */
            renderTo(element: any): Component;
            /**
             * Cause the Component to recompute layout and redraw. If passed arguments, will resize the root SVG it lives in.
             *
             * @param {number} [availableWidth]  - the width of the container element
             * @param {number} [availableHeight] - the height of the container element
             */
            resize(width?: number, height?: number): Component;
            /**
             * Enables and disables auto-resize.
             *
             * If enabled, window resizes will enqueue this component for a re-layout
             * and re-render. Animations are disabled during window resizes when auto-
             * resize is enabled.
             *
             * @param {boolean} flag - Enables (true) or disables (false) auto-resize.
             */
            autoResize(flag: boolean): Component;
            /**
             * Sets the x alignment of the Component.
             *
             * @param {string} alignment The x alignment of the Component (one of LEFT/CENTER/RIGHT).
             * @returns {Component} The calling Component.
             */
            xAlign(alignment: string): Component;
            /**
             * Sets the y alignment of the Component.
             *
             * @param {string} alignment The y alignment of the Component (one of TOP/CENTER/BOTTOM).
             * @returns {Component} The calling Component.
             */
            yAlign(alignment: string): Component;
            /**
             * Sets the x offset of the Component.
             *
             * @param {number} offset The desired x offset, in pixels.
             * @returns {Component} The calling Component.
             */
            xOffset(offset: number): Component;
            /**
             * Sets the y offset of the Component.
             *
             * @param {number} offset The desired y offset, in pixels.
             * @returns {Component} The calling Component.
             */
            yOffset(offset: number): Component;
            /**
             * Attaches an Interaction to the Component, so that the Interaction will listen for events on the Component.
             *
             * @param {Interaction} interaction The Interaction to attach to the Component.
             * @return {Component} The calling Component.
             */
            registerInteraction(interaction: Interaction): Component;
            /**
             * Adds/removes a given CSS class to/from the Component, or checks if the Component has a particular CSS class.
             *
             * @param {string} cssClass The CSS class to add/remove/check for.
             * @param {boolean} [addClass] Whether to add or remove the CSS class. If not supplied, checks for the CSS class.
             * @return {boolean|Component} Whether the Component has the given CSS class, or the calling Component (if addClass is supplied).
             */
            classed(cssClass: string): boolean;
            classed(cssClass: string, addClass: boolean): Component;
            /**
             * Checks if the Component has a fixed width or false if it grows to fill available space.
             * Returns false by default on the base Component class.
             *
             * @return {boolean} Whether the component has a fixed width.
             */
            _isFixedWidth(): boolean;
            /**
             * Checks if the Component has a fixed height or false if it grows to fill available space.
             * Returns false by default on the base Component class.
             *
             * @return {boolean} Whether the component has a fixed height.
             */
            _isFixedHeight(): boolean;
            /**
             * Merges this Component with another Component, returning a ComponentGroup.
             * There are four cases:
             * Component + Component: Returns a ComponentGroup with both components inside it.
             * ComponentGroup + Component: Returns the ComponentGroup with the Component appended.
             * Component + ComponentGroup: Returns the ComponentGroup with the Component prepended.
             * ComponentGroup + ComponentGroup: Returns a new ComponentGroup with two ComponentGroups inside it.
             *
             * @param {Component} c The component to merge in.
             * @return {ComponentGroup}
             */
            merge(c: Component): Component.Group;
            /**
             * Detaches a Component from the DOM. The component can be reused.
             *
             * @returns The calling Component.
             */
            detach(): Component;
            /**
             * Removes a Component from the DOM and disconnects it from everything it's
             * listening to (effectively destroying it).
             */
            remove(): void;
            /**
             * Return the width of the component
             *
             * @return {number} width of the component
             */
            width(): number;
            /**
             * Return the height of the component
             *
             * @return {number} height of the component
             */
            height(): number;
        }
    }
}


declare module Plottable {
    module Abstract {
        class ComponentContainer extends Component {
            _components: Component[];
            _anchor(element: D3.Selection): void;
            _render(): void;
            _removeComponent(c: Component): void;
            _addComponent(c: Component, prepend?: boolean): boolean;
            /**
             * Returns a list of components in the ComponentContainer
             *
             * @returns{Component[]} the contained Components
             */
            components(): Component[];
            /**
             * Returns true iff the ComponentContainer is empty.
             *
             * @returns {boolean} Whether the calling ComponentContainer is empty.
             */
            empty(): boolean;
            /**
             * Detaches all components contained in the ComponentContainer, and
             * empties the ComponentContainer.
             *
             * @returns {ComponentContainer} The calling ComponentContainer
             */
            detachAll(): ComponentContainer;
            remove(): void;
        }
    }
}


declare module Plottable {
    module Component {
        class Group extends Abstract.ComponentContainer {
            /**
             * Creates a ComponentGroup.
             *
             * @constructor
             * @param {Component[]} [components] The Components in the Group.
             */
            constructor(components?: Abstract.Component[]);
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            merge(c: Abstract.Component): Group;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): Group;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
        }
    }
}


declare module Plottable {
    module Component {
        interface IterateLayoutResult {
            colProportionalSpace: number[];
            rowProportionalSpace: number[];
            guaranteedWidths: number[];
            guaranteedHeights: number[];
            wantsWidth: boolean;
            wantsHeight: boolean;
        }
        class Table extends Abstract.ComponentContainer {
            /**
             * Creates a Table.
             *
             * @constructor
             * @param {Component[][]} [rows] A 2-D array of the Components to place in the table.
             * null can be used if a cell is empty.
             */
            constructor(rows?: Abstract.Component[][]);
            /**
             * Adds a Component in the specified cell.
             *
             * @param {number} row The row in which to add the Component.
             * @param {number} col The column in which to add the Component.
             * @param {Component} component The Component to be added.
             */
            addComponent(row: number, col: number, component: Abstract.Component): Table;
            _removeComponent(component: Abstract.Component): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): void;
            /**
             * Sets the row and column padding on the Table.
             *
             * @param {number} rowPadding The padding above and below each row, in pixels.
             * @param {number} colPadding the padding to the left and right of each column, in pixels.
             * @returns {Table} The calling Table.
             */
            padding(rowPadding: number, colPadding: number): Table;
            /**
             * Sets the layout weight of a particular row.
             * Space is allocated to rows based on their weight. Rows with higher weights receive proportionally more space.
             *
             * @param {number} index The index of the row.
             * @param {number} weight The weight to be set on the row.
             * @returns {Table} The calling Table.
             */
            rowWeight(index: number, weight: number): Table;
            /**
             * Sets the layout weight of a particular column.
             * Space is allocated to columns based on their weight. Columns with higher weights receive proportionally more space.
             *
             * @param {number} index The index of the column.
             * @param {number} weight The weight to be set on the column.
             * @returns {Table} The calling Table.
             */
            colWeight(index: number, weight: number): Table;
            _isFixedWidth(): boolean;
            _isFixedHeight(): boolean;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Scale extends PlottableObject implements Core.IListenable {
            _d3Scale: D3.Scale.Scale;
            broadcaster: any;
            _rendererAttrID2Extent: {
                [x: string]: any[];
            };
            /**
             * Creates a new Scale.
             *
             * @constructor
             * @param {D3.Scale.Scale} scale The D3 scale backing the Scale.
             */
            constructor(scale: D3.Scale.Scale);
            _getAllExtents(): any[][];
            _getExtent(): any[];
            /**
             * Modify the domain on the scale so that it includes the extent of all
             * perspectives it depends on. Extent: The (min, max) pair for a
             * QuantitiativeScale, all covered strings for an OrdinalScale.
             * Perspective: A combination of a DataSource and an Accessor that
             * represents a view in to the data.
             */
            autoDomain(): Scale;
            _autoDomainIfAutomaticMode(): void;
            /**
             * Returns the range value corresponding to a given domain value.
             *
             * @param value {any} A domain value to be scaled.
             * @returns {any} The range value corresponding to the supplied domain value.
             */
            scale(value: any): any;
            /**
             * Gets the domain.
             *
             * @returns {any[]} The current domain.
             */
            domain(): any[];
            /**
             * Sets the Scale's domain to the specified values.
             *
             * @param {any[]} values The new value for the domain. This array may
             *     contain more than 2 values if the scale type allows it (e.g.
             *     ordinal scales). Other scales such as quantitative scales accept
             *     only a 2-value extent array.
             * @returns {Scale} The calling Scale.
             */
            domain(values: any[]): Scale;
            _getDomain(): any[];
            _setDomain(values: any[]): void;
            /**
             * Gets the range.
             *
             * @returns {any[]} The current range.
             */
            range(): any[];
            /**
             * Sets the Scale's range to the specified values.
             *
             * @param {any[]} values The new values for the range.
             * @returns {Scale} The calling Scale.
             */
            range(values: any[]): Scale;
            /**
             * Creates a copy of the Scale with the same domain and range but without any registered listeners.
             *
             * @returns {Scale} A copy of the calling Scale.
             */
            copy(): Scale;
            /**
             * When a renderer determines that the extent of a projector has changed,
             * it will call this function. This function should ensure that
             * the scale has a domain at least large enough to include extent.
             *
             * @param {number} rendererID A unique indentifier of the renderer sending
             *                 the new extent.
             * @param {string} attr The attribute being projected, e.g. "x", "y0", "r"
             * @param {any[]} extent The new extent to be included in the scale.
             */
            updateExtent(plotProvidedKey: string, attr: string, extent: any[]): Scale;
            removeExtent(plotProvidedKey: string, attr: string): Scale;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Plot extends Component {
            _dataSource: DataSource;
            _dataChanged: boolean;
            renderArea: D3.Selection;
            element: D3.Selection;
            _animate: boolean;
            _animators: Animator.IPlotAnimatorMap;
            _ANIMATION_DURATION: number;
            _projectors: {
                [x: string]: _IProjector;
            };
            /**
             * Creates a Plot.
             *
             * @constructor
             * @param {any[]|DataSource} [dataset] The data or DataSource to be associated with this Plot.
             */
            constructor();
            constructor(dataset: any[]);
            constructor(dataset: DataSource);
            _anchor(element: D3.Selection): void;
            remove(): void;
            /**
             * Gets the Plot's DataSource.
             *
             * @return {DataSource} The current DataSource.
             */
            dataSource(): DataSource;
            /**
             * Sets the Plot's DataSource.
             *
             * @param {DataSource} source The DataSource the Plot should use.
             * @return {Plot} The calling Plot.
             */
            dataSource(source: DataSource): Plot;
            _onDataSourceUpdate(): void;
            project(attrToSet: string, accessor: any, scale?: Scale): Plot;
            _generateAttrToProjector(): IAttributeToProjector;
            _doRender(): void;
            _paint(): void;
            _setup(): void;
            /**
             * Enables or disables animation.
             *
             * @param {boolean} enabled Whether or not to animate.
             */
            animate(enabled: boolean): Plot;
            detach(): Plot;
            /**
             * This function makes sure that all of the scales in this._projectors
             * have an extent that includes all the data that is projected onto them.
             */
            _updateAllProjectors(): void;
            _updateProjector(attr: string): void;
            /**
             * Apply attributes to the selection.
             *
             * If animation is enabled and a valid animator's key is specified, the
             * attributes are applied with the animator. Otherwise, they are applied
             * immediately to the selection.
             *
             * The animation will not animate during auto-resize renders.
             *
             * @param {D3.Selection} selection The selection of elements to update.
             * @param {string} animatorKey The key for the animator.
             * @param {IAttributeToProjector} attrToProjector The set of attributes to set on the selection.
             * @return {D3.Selection} The resulting selection (potentially after the transition)
             */
            _applyAnimatedAttributes(selection: any, animatorKey: string, attrToProjector: IAttributeToProjector): any;
            /**
             * Gets the animator associated with the specified Animator key.
             *
             * @param {string} animatorKey The key for the Animator.
             * @return {Animator.IPlotAnimator} The Animator for the specified key.
             */
            animator(animatorKey: string): Animator.IPlotAnimator;
            /**
             * Sets the animator associated with the specified Animator key.
             *
             * @param {string} animatorKey The key for the Animator.
             * @param {Animator.IPlotAnimator} animator An Animator to be assigned to
             *                                          the specified key.
             * @return {Plot} The calling Plot.
             */
            animator(animatorKey: string, animator: Animator.IPlotAnimator): Plot;
        }
    }
}


declare module Plottable {
    module Abstract {
        class XYPlot extends Plot {
            xScale: Scale;
            yScale: Scale;
            /**
             * Creates an XYPlot.
             *
             * @constructor
             * @param {any[]|DataSource} [dataset] The data or DataSource to be associated with this Renderer.
             * @param {Scale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor(dataset: any, xScale: Scale, yScale: Scale);
            project(attrToSet: string, accessor: any, scale?: Scale): XYPlot;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): void;
            _updateXDomainer(): void;
            _updateYDomainer(): void;
        }
    }
}


declare module Plottable {
    interface DatasetDrawerKey {
        dataset: DataSource;
        drawer: Abstract._Drawer;
        key: string;
    }
    module Abstract {
        class NewStylePlot extends XYPlot {
            _key2DatasetDrawerKey: D3.Map<DatasetDrawerKey>;
            _datasetKeysInOrder: string[];
            /**
             * Creates a NewStylePlot.
             *
             * @constructor
             * @param [Scale] xScale The x scale to use
             * @param [Scale] yScale The y scale to use
             */
            constructor(xScale?: Scale, yScale?: Scale);
            _setup(): void;
            remove(): void;
            /**
             * Adds a dataset to this plot. Identify this dataset with a key.
             *
             * A key is automatically generated if not supplied.
             *
             * @param {string} [key] The key of the dataset.
             * @param {any[]|DataSource} dataset dataset to add.
             * @return {NewStylePlot} The calling NewStylePlot.
             */
            addDataset(key: string, dataset: DataSource): NewStylePlot;
            addDataset(key: string, dataset: any[]): NewStylePlot;
            addDataset(dataset: DataSource): NewStylePlot;
            addDataset(dataset: any[]): NewStylePlot;
            _addDataset(key: string, dataset: DataSource): void;
            _getDrawer(key: string): _Drawer;
            _updateProjector(attr: string): void;
            /**
             * Gets the dataset order by key
             *
             * @return {string[]} a string array of the keys in order
             */
            datasetOrder(): string[];
            /**
             * Sets the dataset order by key
             *
             * @param {string[]} order A string array which represents the order of the keys. This must be a permutation of existing keys.
             */
            datasetOrder(order: string[]): NewStylePlot;
            /**
             * Removes a dataset
             *
             * @param {string} key The key of the dataset
             * @return {NewStylePlot} The calling NewStylePlot.
             */
            removeDataset(key: string): NewStylePlot;
            _getDatasetsInOrder(): DataSource[];
            _getDrawersInOrder(): _Drawer[];
        }
    }
}


declare module Plottable {
    module Core {
        module RenderController {
            module RenderPolicy {
                interface IRenderPolicy {
                    render(): any;
                }
                class Immediate implements IRenderPolicy {
                    render(): void;
                }
                class AnimationFrame implements IRenderPolicy {
                    render(): void;
                }
                class Timeout implements IRenderPolicy {
                    _timeoutMsec: number;
                    render(): void;
                }
            }
        }
    }
}


declare module Plottable {
    module Core {
        /**
         * The RenderController is responsible for enqueueing and synchronizing
         * layout and render calls for Plottable components.
         *
         * Layouts and renders occur inside an animation callback
         * (window.requestAnimationFrame if available).
         *
         * If you require immediate rendering, call RenderController.flush() to
         * perform enqueued layout and rendering serially.
         */
        module RenderController {
            var _renderPolicy: RenderPolicy.IRenderPolicy;
            function setRenderPolicy(policy: RenderPolicy.IRenderPolicy): any;
            /**
             * If the RenderController is enabled, we enqueue the component for
             * render. Otherwise, it is rendered immediately.
             *
             * @param {Abstract.Component} component Any Plottable component.
             */
            function registerToRender(c: Abstract.Component): void;
            /**
             * If the RenderController is enabled, we enqueue the component for
             * layout and render. Otherwise, it is rendered immediately.
             *
             * @param {Abstract.Component} component Any Plottable component.
             */
            function registerToComputeLayout(c: Abstract.Component): void;
            function flush(): void;
        }
    }
}


declare module Plottable {
    module Core {
        /**
         * The ResizeBroadcaster will broadcast a notification to any registered
         * components when the window is resized.
         *
         * The broadcaster and single event listener are lazily constructed.
         *
         * Upon resize, the _resized flag will be set to true until after the next
         * flush of the RenderController. This is used, for example, to disable
         * animations during resize.
         */
        module ResizeBroadcaster {
            /**
             * Returns true if the window has been resized and the RenderController
             * has not yet been flushed.
             */
            function resizing(): boolean;
            function clearResizing(): any;
            /**
             * Registers a component.
             *
             * When the window is resized, we invoke ._invalidateLayout() on the
             * component, which will enqueue the component for layout and rendering
             * with the RenderController.
             *
             * @param {Abstract.Component} component Any Plottable component.
             */
            function register(c: Abstract.Component): void;
            /**
             * Deregisters the components.
             *
             * The component will no longer receive updates on window resize.
             *
             * @param {Abstract.Component} component Any Plottable component.
             */
            function deregister(c: Abstract.Component): void;
        }
    }
}


declare module Plottable {
    module Animator {
        interface IPlotAnimator {
            /**
             * Applies the supplied attributes to a D3.Selection with some animation.
             *
             * @param {D3.Selection} selection The update selection or transition selection that we wish to animate.
             * @param {IAttributeToProjector} attrToProjector The set of
             *     IAccessors that we will use to set attributes on the selection.
             * @return {D3.Selection} Animators should return the selection or
             *     transition object so that plots may chain the transitions between
             *     animators.
             */
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
        }
        interface IPlotAnimatorMap {
            [animatorKey: string]: IPlotAnimator;
        }
    }
}

declare module Plottable {
    interface IDataset {
        data: any[];
        metadata: IMetadata;
    }
    interface IMetadata {
        cssClass?: string;
        color?: string;
    }
    interface IAccessor {
        (datum: any, index?: number, metadata?: any): any;
    }
    interface IAppliedAccessor {
        (datum: any, index: number): any;
    }
    interface _IProjector {
        accessor: IAccessor;
        scale?: Abstract.Scale;
        attribute: string;
    }
    interface IAttributeToProjector {
        [attrToSet: string]: IAppliedAccessor;
    }
    interface SelectionArea {
        xMin: number;
        xMax: number;
        yMin: number;
        yMax: number;
    }
    interface FullSelectionArea {
        pixel: SelectionArea;
        data: SelectionArea;
    }
    interface ISpaceRequest {
        width: number;
        height: number;
        wantsWidth: boolean;
        wantsHeight: boolean;
    }
    interface IExtent {
        min: number;
        max: number;
    }
    interface Point {
        x: number;
        y: number;
    }
}


declare module Plottable {
    class Domainer {
        /**
         * @param {(extents: any[][]) => any[]} combineExtents
         *        If present, this function will be used by the Domainer to merge
         *        all the extents that are present on a scale.
         *
         *        A plot may draw multiple things relative to a scale, e.g.
         *        different stocks over time. The plot computes their extents,
         *        which are a [min, max] pair. combineExtents is responsible for
         *        merging them all into one [min, max] pair. It defaults to taking
         *        the min of the first elements and the max of the second arguments.
         */
        constructor(combineExtents?: (extents: any[][]) => any[]);
        /**
         * @param {any[][]} extents The list of extents to be reduced to a single
         *        extent.
         * @param {Abstract.QuantitativeScale} scale
         *        Since nice() must do different things depending on Linear, Log,
         *        or Time scale, the scale must be passed in for nice() to work.
         * @return {any[]} The domain, as a merging of all exents, as a [min, max]
         *                 pair.
         */
        computeDomain(extents: any[][], scale: Abstract.QuantitativeScale): any[];
        /**
         * Sets the Domainer to pad by a given ratio.
         *
         * @param {number} [padProportion] Proportionally how much bigger the
         *         new domain should be (0.05 = 5% larger).
         *
         *         A domainer will pad equal visual amounts on each side.
         *         On a linear scale, this means both sides are padded the same
         *         amount: [10, 20] will be padded to [5, 25].
         *         On a log scale, the top will be padded more than the bottom, so
         *         [10, 100] will be padded to [1, 1000].
         *
         * @return {Domainer} The calling Domainer.
         */
        pad(padProportion?: number): Domainer;
        /**
         * Add a padding exception, a value that will not be padded at either end of the domain.
         *
         * Eg, if a padding exception is added at x=0, then [0, 100] will pad to [0, 105] instead of [-2.5, 102.5].
         * If a key is provided, it will be registered under that key with standard map semantics. (Overwrite / remove by key)
         * If a key is not provided, it will be added with set semantics (Can be removed by value)
         *
         * @param {any} exception The padding exception to add.
         * @param string [key] The key to register the exception under.
         * @return Domainer The calling domainer
         */
        addPaddingException(exception: any, key?: string): Domainer;
        /**
         * Remove a padding exception, allowing the domain to pad out that value again.
         *
         * If a string is provided, it is assumed to be a key and the exception associated with that key is removed.
         * If a non-string is provdied, it is assumed to be an unkeyed exception and that exception is removed.
         *
         * @param {any} keyOrException The key for the value to remove, or the value to remove
         * @return Domainer The calling domainer
         */
        removePaddingException(keyOrException: any): Domainer;
        /**
         * Add an included value, a value that must be included inside the domain.
         *
         * Eg, if a value exception is added at x=0, then [50, 100] will expand to [0, 100] rather than [50, 100].
         * If a key is provided, it will be registered under that key with standard map semantics. (Overwrite / remove by key)
         * If a key is not provided, it will be added with set semantics (Can be removed by value)
         *
         * @param {any} value The included value to add.
         * @param string [key] The key to register the value under.
         * @return Domainer The calling domainer
         */
        addIncludedValue(value: any, key?: string): Domainer;
        /**
         * Remove an included value, allowing the domain to not include that value gain again.
         *
         * If a string is provided, it is assumed to be a key and the value associated with that key is removed.
         * If a non-string is provdied, it is assumed to be an unkeyed value and that value is removed.
         *
         * @param {any} keyOrException The key for the value to remove, or the value to remove
         * @return Domainer The calling domainer
         */
        removeIncludedValue(valueOrKey: any): Domainer;
        /**
         * Extends the scale's domain so it starts and ends with "nice" values.
         *
         * @param {number} [count] The number of ticks that should fit inside the new domain.
         * @return {Domainer} The calling Domainer.
         */
        nice(count?: number): Domainer;
    }
}


declare module Plottable {
    module Abstract {
        class QuantitativeScale extends Scale {
            _d3Scale: D3.Scale.QuantitativeScale;
            _lastRequestedTickCount: number;
            _PADDING_FOR_IDENTICAL_DOMAIN: number;
            _userSetDomainer: boolean;
            /**
             * Creates a new QuantitativeScale.
             *
             * @constructor
             * @param {D3.Scale.QuantitativeScale} scale The D3 QuantitativeScale backing the QuantitativeScale.
             */
            constructor(scale: D3.Scale.QuantitativeScale);
            _getExtent(): any[];
            /**
             * Retrieves the domain value corresponding to a supplied range value.
             *
             * @param {number} value: A value from the Scale's range.
             * @returns {number} The domain value corresponding to the supplied range value.
             */
            invert(value: number): number;
            /**
             * Creates a copy of the QuantitativeScale with the same domain and range but without any registered listeners.
             *
             * @returns {QuantitativeScale} A copy of the calling QuantitativeScale.
             */
            copy(): QuantitativeScale;
            domain(): any[];
            domain(values: any[]): QuantitativeScale;
            _setDomain(values: any[]): void;
            /**
             * Sets or gets the QuantitativeScale's output interpolator
             *
             * @param {D3.Transition.Interpolate} [factory] The output interpolator to use.
             * @returns {D3.Transition.Interpolate|QuantitativeScale} The current output interpolator, or the calling QuantitativeScale.
             */
            interpolate(): D3.Transition.Interpolate;
            interpolate(factory: D3.Transition.Interpolate): QuantitativeScale;
            /**
             * Sets the range of the QuantitativeScale and sets the interpolator to d3.interpolateRound.
             *
             * @param {number[]} values The new range value for the range.
             */
            rangeRound(values: number[]): QuantitativeScale;
            /**
             * Gets the clamp status of the QuantitativeScale (whether to cut off values outside the ouput range).
             *
             * @returns {boolean} The current clamp status.
             */
            clamp(): boolean;
            /**
             * Sets the clamp status of the QuantitativeScale (whether to cut off values outside the ouput range).
             *
             * @param {boolean} clamp Whether or not to clamp the QuantitativeScale.
             * @returns {QuantitativeScale} The calling QuantitativeScale.
             */
            clamp(clamp: boolean): QuantitativeScale;
            /**
             * Generates tick values.
             *
             * @param {number} [count] The number of ticks to generate.
             * @returns {any[]} The generated ticks.
             */
            ticks(count?: number): any[];
            /**
             * Gets a tick formatting function for displaying tick values.
             *
             * @param {number} count The number of ticks to be displayed
             * @param {string} [format] A format specifier string.
             * @returns {(n: number) => string} A formatting function.
             */
            tickFormat(count: number, format?: string): (n: number) => string;
            /**
             * Given a domain, expands its domain onto "nice" values, e.g. whole
             * numbers.
             */
            _niceDomain(domain: any[], count?: number): any[];
            /**
             * Retrieve a Domainer of a scale. A Domainer is responsible for combining
             * multiple extents into a single domain.
             *
             * @return {QuantitativeScale} The scale's current domainer.
             */
            domainer(): Domainer;
            /**
             * Sets a Domainer of a scale. A Domainer is responsible for combining
             * multiple extents into a single domain.
             *
             * When you set domainer, we assume that you know what you want the domain
             * to look like better that we do. Ensuring that the domain is padded,
             * includes 0, etc., will be the responsability of the new domainer.
             *
             * @param {Domainer} domainer The domainer to be set.
             * @return {QuantitativeScale} The calling scale.
             */
            domainer(domainer: Domainer): QuantitativeScale;
            _defaultExtent(): any[];
        }
    }
}


declare module Plottable {
    module Scale {
        class Linear extends Abstract.QuantitativeScale {
            /**
             * Creates a new LinearScale.
             *
             * @constructor
             * @param {D3.Scale.LinearScale} [scale] The D3 LinearScale backing the LinearScale. If not supplied, uses a default scale.
             */
            constructor();
            constructor(scale: D3.Scale.LinearScale);
            /**
             * Creates a copy of the LinearScale with the same domain and range but without any registered listeners.
             *
             * @returns {LinearScale} A copy of the calling LinearScale.
             */
            copy(): Linear;
        }
    }
}


declare module Plottable {
    module Scale {
        class Log extends Abstract.QuantitativeScale {
            /**
             * Creates a new Scale.Log.
             *
             * Warning: Log is deprecated; if possible, use ModifiedLog. Log scales are
             * very unstable due to the fact that they can't handle 0 or negative
             * numbers. The only time when you would want to use a Log scale over a
             * ModifiedLog scale is if you're plotting very small data, such as all
             * data < 1.
             *
             * @constructor
             * @param {D3.Scale.LogScale} [scale] The D3 Scale.Log backing the Scale.Log. If not supplied, uses a default scale.
             */
            constructor();
            constructor(scale: D3.Scale.LogScale);
            /**
             * Creates a copy of the Scale.Log with the same domain and range but without any registered listeners.
             *
             * @returns {Scale.Log} A copy of the calling Scale.Log.
             */
            copy(): Log;
            _defaultExtent(): number[];
        }
    }
}


declare module Plottable {
    module Scale {
        class ModifiedLog extends Abstract.QuantitativeScale {
            /**
             * Creates a new Scale.ModifiedLog.
             *
             * A ModifiedLog scale acts as a regular log scale for large numbers.
             * As it approaches 0, it gradually becomes linear. This means that the
             * scale won't freak out if you give it 0 or a negative number, where an
             * ordinary Log scale would.
             *
             * However, it does mean that scale will be effectively linear as values
             * approach 0. If you want very small values on a log scale, you should use
             * an ordinary Scale.Log instead.
             *
             * @constructor
             * @param {number} [base]
             *        The base of the log. Defaults to 10, and must be > 1.
             *
             *        For base <= x, scale(x) = log(x).
             *
             *        For 0 < x < base, scale(x) will become more and more
             *        linear as it approaches 0.
             *
             *        At x == 0, scale(x) == 0.
             *
             *        For negative values, scale(-x) = -scale(x).
             */
            constructor(base?: number);
            scale(x: number): number;
            invert(x: number): number;
            _getDomain(): number[];
            _setDomain(values: number[]): void;
            ticks(count?: number): number[];
            copy(): ModifiedLog;
            _niceDomain(domain: any[], count?: number): any[];
            /**
             * @returns {boolean}
             * Whether or not to return tick values other than powers of base.
             *
             * This defaults to false, so you'll normally only see ticks like
             * [10, 100, 1000]. If you turn it on, you might see ticks values
             * like [10, 50, 100, 500, 1000].
             */
            showIntermediateTicks(): boolean;
            /**
             * @param {boolean} show
             * Whether or not to return ticks values other than powers of the base.
             */
            showIntermediateTicks(show: boolean): ModifiedLog;
        }
    }
}


declare module Plottable {
    module Scale {
        class Ordinal extends Abstract.Scale {
            _d3Scale: D3.Scale.OrdinalScale;
            /**
             * Creates a new OrdinalScale. Domain and Range are set later.
             *
             * @constructor
             */
            constructor(scale?: D3.Scale.OrdinalScale);
            _getExtent(): any[];
            /**
             * Gets the domain.
             *
             * @returns {any[]} The current domain.
             */
            domain(): any[];
            /**
             * Sets the domain.
             *
             * @param {any[]} values The new values for the domain. This array may contain more than 2 values.
             * @returns {Ordinal} The calling Ordinal Scale.
             */
            domain(values: any[]): Ordinal;
            _setDomain(values: any[]): void;
            /**
             * Gets the range of pixels spanned by the Ordinal Scale.
             *
             * @returns {number[]} The pixel range.
             */
            range(): number[];
            /**
             * Sets the range of pixels spanned by the Ordinal Scale.
             *
             * @param {number[]} values The pixel range to to be spanend by the scale.
             * @returns {Ordinal} The calling Ordinal Scale.
             */
            range(values: number[]): Ordinal;
            /**
             * Returns the width of the range band. Only valid when rangeType is set to "bands".
             *
             * @returns {number} The range band width or 0 if rangeType isn't "bands".
             */
            rangeBand(): number;
            innerPadding(): number;
            fullBandStartAndWidth(v: any): number[];
            /**
             * Gets the range type.
             *
             * @returns {string} The current range type.
             */
            rangeType(): string;
            /**
             * Sets the range type.
             *
             * @param {string} rangeType Either "points" or "bands" indicating the
             *     d3 method used to generate range bounds.
             * @param {number} [outerPadding] The padding outside the range,
             *     proportional to the range step.
             * @param {number} [innerPadding] The padding between bands in the range,
             *     proportional to the range step. This parameter is only used in
             *     "bands" type ranges.
             * @returns {Ordinal} The calling Ordinal Scale.
             */
            rangeType(rangeType: string, outerPadding?: number, innerPadding?: number): Ordinal;
            /**
             * Creates a copy of the Scale with the same domain and range but without any registered listeners.
             *
             * @returns {Ordinal} A copy of the calling Scale.
             */
            copy(): Ordinal;
        }
    }
}


declare module Plottable {
    module Scale {
        class Color extends Abstract.Scale {
            /**
             * Creates a ColorScale.
             *
             * @constructor
             * @param {string} [scaleType] the type of color scale to create
             *     (Category10/Category20/Category20b/Category20c).
             * See https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors
             */
            constructor(scaleType?: string);
            _getExtent(): any[];
        }
    }
}


declare module Plottable {
    module Scale {
        class Time extends Abstract.QuantitativeScale {
            /**
             * Creates a new Time Scale.
             *
             * @constructor
             * @param {D3.Scale.Time} [scale] The D3 LinearScale backing the TimeScale. If not supplied, uses a default scale.
             */
            constructor();
            constructor(scale: D3.Scale.LinearScale);
            tickInterval(interval: D3.Time.Interval, step?: number): any[];
            domain(): any[];
            domain(values: any[]): Time;
            /**
             * Creates a copy of the TimeScale with the same domain and range but without any registered listeners.
             *
             * @returns {TimeScale} A copy of the calling TimeScale.
             */
            copy(): Time;
            _defaultExtent(): any[];
        }
    }
}


declare module Plottable {
    module Scale {
        /**
         * This class implements a color scale that takes quantitive input and
         * interpolates between a list of color values. It returns a hex string
         * representing the interpolated color.
         *
         * By default it generates a linear scale internally.
         */
        class InterpolatedColor extends Abstract.QuantitativeScale {
            /**
             * Creates a InterpolatedColorScale.
             *
             * @constructor
             * @param {string|string[]} [colorRange] the type of color scale to
             *     create. Default is "reds". @see {@link colorRange} for further
             *     options.
             * @param {string} [scaleType] the type of underlying scale to use
             *     (linear/pow/log/sqrt). Default is "linear". @see {@link scaleType}
             *     for further options.
             */
            constructor(colorRange?: any, scaleType?: string);
            /**
             * Gets the color range.
             *
             * @returns {string[]} the current color values for the range as strings.
             */
            colorRange(): string[];
            /**
             * Sets the color range.
             *
             * @param {string|string[]} colorRange. If colorRange is one of
             *     (reds/blues/posneg), uses the built-in color groups. If colorRange
             *     is an array of strings with at least 2 values
             *     (e.g. ["#FF00FF", "red", "dodgerblue"], the resulting scale
             *     will interpolate between the color values across the domain.
             * @returns {InterpolatedColor} The calling InterpolatedColor Scale.
             */
            colorRange(colorRange: any): InterpolatedColor;
            /**
             * Gets the internal scale type.
             *
             * @returns {string} The current scale type.
             */
            scaleType(): string;
            /**
             * Sets the internal scale type.
             *
             * @param {string} scaleType. The type of d3 scale to use internally.
             *                            (linear/log/sqrt/pow).
             * @returns {InterpolatedColor} The calling InterpolatedColor Scale.
             */
            scaleType(scaleType: string): InterpolatedColor;
            autoDomain(): InterpolatedColor;
        }
    }
}


declare module Plottable {
    module Util {
        class ScaleDomainCoordinator {
            /**
             * Creates a ScaleDomainCoordinator.
             *
             * @constructor
             * @param {Scale[]} scales A list of scales whose domains should be linked.
             */
            constructor(scales: Abstract.Scale[]);
            rescale(scale: Abstract.Scale): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class _Drawer {
            renderArea: D3.Selection;
            key: string;
            /**
             * Creates a Drawer
             *
             * @constructor
             * @param{string} key The key associated with this Drawer
             */
            constructor(key: string);
            /**
             * Removes the Drawer and its renderArea
             */
            remove(): void;
            /**
             * Draws the data into the renderArea using the attrHash for attributes
             *
             * @param{any[][]} data The data to be drawn
             * @param{attrHash} IAttributeToProjector The list of attributes to set on the data
             */
            draw(data: any[][], attrToProjector: IAttributeToProjector, animator?: Animator.Null): void;
        }
    }
}


declare module Plottable {
    module _Drawer {
        class Rect extends Abstract._Drawer {
            draw(data: any[][], attrToProjector: IAttributeToProjector, animator?: Animator.Null): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Axis extends Component {
            /**
             * The css class applied to each end tick mark (the line on the end tick).
             */
            static END_TICK_MARK_CLASS: string;
            /**
             * The css class applied to each tick mark (the line on the tick).
             */
            static TICK_MARK_CLASS: string;
            /**
             * The css class applied to each tick label (the text associated with the tick).
             */
            static TICK_LABEL_CLASS: string;
            _tickMarkContainer: D3.Selection;
            _tickLabelContainer: D3.Selection;
            _baseline: D3.Selection;
            _scale: Scale;
            _formatter: Formatter;
            _orientation: string;
            _userRequestedWidth: any;
            _userRequestedHeight: any;
            _computedWidth: number;
            _computedHeight: number;
            constructor(scale: Scale, orientation: string, formatter?: (d: any) => string);
            remove(): void;
            _isHorizontal(): boolean;
            _computeWidth(): number;
            _computeHeight(): number;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _isFixedHeight(): boolean;
            _isFixedWidth(): boolean;
            _rescale(): void;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): void;
            _setup(): void;
            _getTickValues(): any[];
            _doRender(): void;
            _generateBaselineAttrHash(): {
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            };
            _generateTickMarkAttrHash(isEndTickMark?: boolean): {
                x1: any;
                y1: any;
                x2: any;
                y2: any;
            };
            _invalidateLayout(): void;
            /**
             * Gets the current width.
             *
             * @returns {number} The current width.
             */
            width(): number;
            /**
             * Sets a user-specified width.
             *
             * @param {number|String} w A fixed width for the Axis, or "auto" for automatic mode.
             * @returns {Axis} The calling Axis.
             */
            width(w: any): Axis;
            /**
             * Gets the current height.
             *
             * @returns {number} The current height.
             */
            height(): number;
            /**
             * Sets a user-specified height.
             *
             * @param {number|String} h A fixed height for the Axis, or "auto" for automatic mode.
             * @returns {Axis} The calling Axis.
             */
            height(h: any): Axis;
            /**
             * Get the current formatter on the axis.
             *
             * @returns {Formatter} the axis formatter
             */
            formatter(): Formatter;
            /**
             * Sets a new tick formatter.
             *
             * @param {Formatter} formatter
             * @returns {Abstract.Axis} The calling Axis.
             */
            formatter(formatter: Formatter): Axis;
            /**
             * Gets the current tick mark length.
             *
             * @returns {number} The current tick mark length.
             */
            tickLength(): number;
            /**
             * Sets the tick mark length.
             *
             * @param {number} length The length of each tick.
             * @returns {BaseAxis} The calling Axis.
             */
            tickLength(length: number): Axis;
            /**
             * Gets the current end tick mark length.
             *
             * @returns {number} The current end tick mark length.
             */
            endTickLength(): number;
            /**
             * Sets the end tick mark length.
             *
             * @param {number} length The length of the end ticks.
             * @returns {BaseAxis} The calling Axis.
             */
            endTickLength(length: number): Axis;
            _maxLabelTickLength(): number;
            /**
             * Gets the padding between each tick mark and its associated label.
             *
             * @returns {number} The current padding, in pixels.
             */
            tickLabelPadding(): number;
            /**
             * Sets the padding between each tick mark and its associated label.
             *
             * @param {number} padding The desired padding, in pixels.
             * @returns {Axis} The calling Axis.
             */
            tickLabelPadding(padding: number): Axis;
            /**
             * Gets the size of the gutter (the extra space between the tick labels and the outer edge of the axis).
             *
             * @returns {number} The current size of the gutter, in pixels.
             */
            gutter(): number;
            /**
             * Sets the size of the gutter (the extra space between the tick labels and the outer edge of the axis).
             *
             * @param {number} size The desired size of the gutter, in pixels.
             * @returns {Axis} The calling Axis.
             */
            gutter(size: number): Axis;
            /**
             * Gets the orientation of the Axis.
             *
             * @returns {string} The current orientation.
             */
            orient(): string;
            /**
             * Sets the orientation of the Axis.
             *
             * @param {string} newOrientation The desired orientation (top/bottom/left/right).
             * @returns {Axis} The calling Axis.
             */
            orient(newOrientation: string): Axis;
            /**
             * Checks whether the Axis is currently set to show the first and last
             * tick labels.
             *
             * @returns {boolean}
             */
            showEndTickLabels(): boolean;
            /**
             * Set whether or not to show the first and last tick labels.
             *
             * @param {boolean} show Whether or not to show the first and last labels.
             * @returns {Axis} The calling Axis.
             */
            showEndTickLabels(show: boolean): Axis;
            _hideEndTickLabels(): void;
            _hideOverlappingTickLabels(): void;
        }
    }
}


declare module Plottable {
    module Axis {
        interface ITimeInterval {
            timeUnit: D3.Time.Interval;
            step: number;
            formatString: string;
        }
        class Time extends Abstract.Axis {
            _majorTickLabels: D3.Selection;
            _minorTickLabels: D3.Selection;
            _scale: Scale.Time;
            static minorIntervals: ITimeInterval[];
            static majorIntervals: ITimeInterval[];
            /**
             * Creates a TimeAxis
             *
             * @constructor
             * @param {TimeScale} scale The scale to base the Axis on.
             * @param {string} orientation The orientation of the Axis (top/bottom)
             */
            constructor(scale: Scale.Time, orientation: string);
            _computeHeight(): number;
            _setup(): void;
            _getTickIntervalValues(interval: ITimeInterval): any[];
            _getTickValues(): any[];
            _measureTextHeight(container: D3.Selection): number;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Axis {
        class Numeric extends Abstract.Axis {
            _scale: Abstract.QuantitativeScale;
            /**
             * Creates a NumericAxis.
             *
             * @constructor
             * @param {QuantitativeScale} scale The QuantitativeScale to base the NumericAxis on.
             * @param {string} orientation The orientation of the QuantitativeScale (top/bottom/left/right)
             * @param {Formatter} [formatter] A function to format tick labels (default Formatters.general(3, false)).
             */
            constructor(scale: Abstract.QuantitativeScale, orientation: string, formatter?: (d: any) => string);
            _setup(): void;
            _computeWidth(): number;
            _computeHeight(): number;
            _getTickValues(): any[];
            _rescale(): void;
            _doRender(): void;
            /**
             * Gets the tick label position relative to the tick marks.
             *
             * @returns {string} The current tick label position.
             */
            tickLabelPosition(): string;
            /**
             * Sets the tick label position relative to the tick marks.
             *
             * @param {string} position The relative position of the tick label.
             *                          [top/center/bottom] for a vertical NumericAxis,
             *                          [left/center/right] for a horizontal NumericAxis.
             * @returns {NumericAxis} The calling NumericAxis.
             */
            tickLabelPosition(position: string): Numeric;
            /**
             * Return whether or not the tick labels at the end of the graph are
             * displayed when partially cut off.
             *
             * @param {string} orientation Where on the scale to change tick labels.
             *                 On a "top" or "bottom" axis, this can be "left" or
             *                 "right". On a "left" or "right" axis, this can be "top"
             *                 or "bottom".
             * @returns {boolean} The current setting.
             */
            showEndTickLabel(orientation: string): boolean;
            /**
             * Control whether or not the tick labels at the end of the graph are
             * displayed when partially cut off.
             *
             * @param {string} orientation Where on the scale to change tick labels.
             *                 On a "top" or "bottom" axis, this can be "left" or
             *                 "right". On a "left" or "right" axis, this can be "top"
             *                 or "bottom".
             * @param {boolean} show Whether or not the given tick should be displayed.
             * @returns {Numeric} The calling Numeric.
             */
            showEndTickLabel(orientation: string, show: boolean): Numeric;
        }
    }
}


declare module Plottable {
    module Axis {
        class Category extends Abstract.Axis {
            _scale: Scale.Ordinal;
            /**
             * Creates a CategoryAxis.
             *
             * A CategoryAxis takes an OrdinalScale and includes word-wrapping algorithms and advanced layout logic to try to
             * display the scale as efficiently as possible.
             *
             * @constructor
             * @param {OrdinalScale} scale The scale to base the Axis on.
             * @param {string} orientation The orientation of the Axis (top/bottom/left/right)
             * @param {Formatter} [formatter] The Formatter for the Axis (default Formatters.identity())
             */
            constructor(scale: Scale.Ordinal, orientation?: string, formatter?: (d: any) => string);
            _setup(): void;
            _rescale(): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _getTickValues(): string[];
            _doRender(): void;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): void;
        }
    }
}


declare module Plottable {
    module Component {
        class Label extends Abstract.Component {
            /**
             * Creates a Label.
             *
             * @constructor
             * @param {string} [displayText] The text of the Label.
             * @param {string} [orientation] The orientation of the Label (horizontal/vertical-left/vertical-right).
             */
            constructor(displayText?: string, orientation?: string);
            xAlign(alignment: string): Label;
            yAlign(alignment: string): Label;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _setup(): void;
            /**
             * Retrieve the current text on the Label.
             *
             * @returns {string} The text on the label.
             */
            text(): string;
            /**
             * Sets the text on the Label.
             *
             * @param {string} displayText The new text for the Label.
             * @returns {Label} The calling Label.
             */
            text(displayText: string): Label;
            _doRender(): void;
            _computeLayout(xOffset?: number, yOffset?: number, availableWidth?: number, availableHeight?: number): Label;
        }
        class TitleLabel extends Label {
            constructor(text?: string, orientation?: string);
        }
        class AxisLabel extends Label {
            constructor(text?: string, orientation?: string);
        }
    }
}


declare module Plottable {
    module Component {
        interface ToggleCallback {
            (datum: string, newState: boolean): any;
        }
        interface HoverCallback {
            (datum?: string): any;
        }
        class Legend extends Abstract.Component {
            /**
             * The css class applied to each legend row
             */
            static SUBELEMENT_CLASS: string;
            /**
             * Creates a Legend.
             *
             * A legend consists of a series of legend rows, each with a color and label taken from the `colorScale`.
             * The rows will be displayed in the order of the `colorScale` domain.
             * This legend also allows interactions, through the functions `toggleCallback` and `hoverCallback`
             * Setting a callback will also put classes on the individual rows.
             *
             * @constructor
             * @param {Scale.Color} colorScale
             */
            constructor(colorScale?: Scale.Color);
            remove(): void;
            /**
             * Assigns or gets the callback to the Legend
             *
             * This callback is associated with toggle events, which trigger when a legend row is clicked.
             * Internally, this will change the state of of the row from "toggled-on" to "toggled-off" and vice versa.
             * Setting a callback will also set a class to each individual legend row as "toggled-on" or "toggled-off".
             * Call with argument of null to remove the callback. This will also remove the above classes to legend rows.
             *
             * @param {ToggleCallback} callback The new callback function
             */
            toggleCallback(callback: ToggleCallback): Legend;
            toggleCallback(): ToggleCallback;
            /**
             * Assigns or gets the callback to the Legend
             * This callback is associated with hover events, which trigger when the mouse enters or leaves a legend row
             * Setting a callback will also set the class "hover" to all legend row,
             * as well as the class "focus" to the legend row being hovered over.
             * Call with argument of null to remove the callback. This will also remove the above classes to legend rows.
             *
             * @param{HoverCallback} callback The new callback function
             */
            hoverCallback(callback: HoverCallback): Legend;
            hoverCallback(): HoverCallback;
            /**
             * Assigns a new ColorScale to the Legend.
             *
             * @param {ColorScale} scale
             * @returns {Legend} The calling Legend.
             */
            scale(scale: Scale.Color): Legend;
            scale(): Scale.Color;
            _computeLayout(xOrigin?: number, yOrigin?: number, availableWidth?: number, availableHeight?: number): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Component {
        class HorizontalLegend extends Abstract.Component {
            /**
             * The css class applied to each legend row
             */
            static LEGEND_ROW_CLASS: string;
            /**
             * The css class applied to each legend entry
             */
            static LEGEND_ENTRY_CLASS: string;
            /**
             * Creates a Horizontal Legend.
             *
             * The legend consists of a series of legend entries, each with a color and label taken from the `colorScale`.
             * The entries will be displayed in the order of the `colorScale` domain.
             *
             * @constructor
             * @param {Scale.Color} colorScale
             */
            constructor(colorScale: Scale.Color);
            remove(): void;
            _requestedSpace(offeredWidth: number, offeredHeight: number): ISpaceRequest;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Component {
        class Gridlines extends Abstract.Component {
            /**
             * Creates a set of Gridlines.
             * @constructor
             *
             * @param {QuantitativeScale} xScale The scale to base the x gridlines on. Pass null if no gridlines are desired.
             * @param {QuantitativeScale} yScale The scale to base the y gridlines on. Pass null if no gridlines are desired.
             */
            constructor(xScale: Abstract.QuantitativeScale, yScale: Abstract.QuantitativeScale);
            remove(): Gridlines;
            _setup(): void;
            _doRender(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        class Scatter extends Abstract.XYPlot {
            _animators: Animator.IPlotAnimatorMap;
            /**
             * Creates a ScatterPlot.
             *
             * @constructor
             * @param {IDataset} dataset The dataset to render.
             * @param {Scale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor(dataset: any, xScale: Abstract.Scale, yScale: Abstract.Scale);
            project(attrToSet: string, accessor: any, scale?: Abstract.Scale): Scatter;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        class Grid extends Abstract.XYPlot {
            colorScale: Abstract.Scale;
            xScale: Scale.Ordinal;
            yScale: Scale.Ordinal;
            _animators: Animator.IPlotAnimatorMap;
            /**
             * Creates a GridPlot.
             *
             * @constructor
             * @param {IDataset} dataset The dataset to render.
             * @param {OrdinalScale} xScale The x scale to use.
             * @param {OrdinalScale} yScale The y scale to use.
             * @param {ColorScale|InterpolatedColorScale} colorScale The color scale to use for each grid
             *     cell.
             */
            constructor(dataset: any, xScale: Scale.Ordinal, yScale: Scale.Ordinal, colorScale: Abstract.Scale);
            project(attrToSet: string, accessor: any, scale?: Abstract.Scale): Grid;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class BarPlot extends XYPlot {
            _bars: D3.UpdateSelection;
            _baseline: D3.Selection;
            _baselineValue: number;
            _barAlignmentFactor: number;
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            _isVertical: boolean;
            _animators: Animator.IPlotAnimatorMap;
            /**
             * Creates an AbstractBarPlot.
             *
             * @constructor
             * @param {IDataset} dataset The dataset to render.
             * @param {Scale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor(dataset: any, xScale: Scale, yScale: Scale);
            _setup(): void;
            _paint(): void;
            /**
             * Sets the baseline for the bars to the specified value.
             *
             * @param {number} value The value to position the baseline at.
             * @return {AbstractBarPlot} The calling AbstractBarPlot.
             */
            baseline(value: number): BarPlot;
            /**
             * Sets the bar alignment relative to the independent axis.
             * VerticalBarPlot supports "left", "center", "right"
             * HorizontalBarPlot supports "top", "center", "bottom"
             *
             * @param {string} alignment The desired alignment.
             * @return {AbstractBarPlot} The calling AbstractBarPlot.
             */
            barAlignment(alignment: string): BarPlot;
            /**
             * Selects the bar under the given pixel position (if [xValOrExtent]
             * and [yValOrExtent] are {number}s), under a given line (if only one
             * of [xValOrExtent] or [yValOrExtent] are {IExtent}s) or are under a
             * 2D area (if [xValOrExtent] and [yValOrExtent] are both {IExtent}s).
             *
             * @param {any} xValOrExtent The pixel x position, or range of x values.
             * @param {any} yValOrExtent The pixel y position, or range of y values.
             * @param {boolean} [select] Whether or not to select the bar (by classing it "selected");
             * @return {D3.Selection} The selected bar, or null if no bar was selected.
             */
            selectBar(xValOrExtent: IExtent, yValOrExtent: IExtent, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: number, yValOrExtent: IExtent, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: IExtent, yValOrExtent: number, select?: boolean): D3.Selection;
            selectBar(xValOrExtent: number, yValOrExtent: number, select?: boolean): D3.Selection;
            /**
             * Deselects all bars.
             * @return {AbstractBarPlot} The calling AbstractBarPlot.
             */
            deselectAll(): BarPlot;
            _updateDomainer(scale: Scale): void;
            _updateYDomainer(): void;
            _updateXDomainer(): void;
            _generateAttrToProjector(): IAttributeToProjector;
        }
    }
}


declare module Plottable {
    module Plot {
        /**
         * A VerticalBarPlot draws bars vertically.
         * Key projected attributes:
         *  - "width" - the horizontal width of a bar.
         *      - if an ordinal scale is attached, this defaults to ordinalScale.rangeBand()
         *      - if a quantitative scale is attached, this defaults to 10
         *  - "x" - the horizontal position of a bar
         *  - "y" - the vertical height of a bar
         */
        class VerticalBar extends Abstract.BarPlot {
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            _isVertical: boolean;
            /**
             * Creates a VerticalBarPlot.
             *
             * @constructor
             * @param {IDataset} dataset The dataset to render.
             * @param {Scale} xScale The x scale to use.
             * @param {QuantitativeScale} yScale The y scale to use.
             */
            constructor(dataset: any, xScale: Abstract.Scale, yScale: Abstract.QuantitativeScale);
            _updateYDomainer(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        /**
         * A HorizontalBarPlot draws bars horizontally.
         * Key projected attributes:
         *  - "width" - the vertical height of a bar (since the bar is rotated horizontally)
         *      - if an ordinal scale is attached, this defaults to ordinalScale.rangeBand()
         *      - if a quantitative scale is attached, this defaults to 10
         *  - "x" - the horizontal length of a bar
         *  - "y" - the vertical position of a bar
         */
        class HorizontalBar extends Abstract.BarPlot {
            static _BarAlignmentToFactor: {
                [x: string]: number;
            };
            isVertical: boolean;
            /**
             * Creates a HorizontalBarPlot.
             *
             * @constructor
             * @param {IDataset} dataset The dataset to render.
             * @param {QuantitativeScale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor(dataset: any, xScale: Abstract.QuantitativeScale, yScale: Abstract.Scale);
            _updateXDomainer(): void;
            _generateAttrToProjector(): IAttributeToProjector;
        }
    }
}


declare module Plottable {
    module Plot {
        class Line extends Abstract.XYPlot {
            _animators: Animator.IPlotAnimatorMap;
            /**
             * Creates a LinePlot.
             *
             * @constructor
             * @param {IDataset} dataset The dataset to render.
             * @param {Scale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor(dataset: any, xScale: Abstract.Scale, yScale: Abstract.Scale);
            _setup(): void;
            _appendPath(): void;
            _getResetYFunction(): (d: any, i: number) => any;
            _generateAttrToProjector(): IAttributeToProjector;
            _paint(): void;
            _wholeDatumAttributes(): string[];
        }
    }
}


declare module Plottable {
    module Plot {
        /**
         * An AreaPlot draws a filled region (area) between the plot's projected "y" and projected "y0" values.
         */
        class Area extends Line {
            /**
             * Creates an AreaPlot.
             *
             * @constructor
             * @param {IDataset} dataset The dataset to render.
             * @param {Scale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor(dataset: any, xScale: Abstract.Scale, yScale: Abstract.Scale);
            _appendPath(): void;
            _onDataSourceUpdate(): void;
            _updateYDomainer(): void;
            project(attrToSet: string, accessor: any, scale?: Abstract.Scale): Area;
            _getResetYFunction(): IAppliedAccessor;
            _paint(): void;
            _wholeDatumAttributes(): string[];
        }
    }
}


declare module Plottable {
    module Abstract {
        class NewStyleBarPlot extends NewStylePlot {
            static _barAlignmentToFactor: {
                [x: string]: number;
            };
            static DEFAULT_WIDTH: number;
            _baseline: D3.Selection;
            _baselineValue: number;
            _barAlignmentFactor: number;
            _isVertical: boolean;
            _animators: Animator.IPlotAnimatorMap;
            /**
             * Creates an NewStyleBarPlot.
             *
             * @constructor
             * @param {Scale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor(xScale: Scale, yScale: Scale);
            _getDrawer(key: string): _Drawer.Rect;
            _setup(): void;
            _paint(): void;
            /**
             * Sets the baseline for the bars to the specified value.
             *
             * @param {number} value The value to position the baseline at.
             * @return {NewStyleBarPlot} The calling NewStyleBarPlot.
             */
            baseline(value: number): any;
            _updateDomainer(scale: Scale): any;
            _generateAttrToProjector(): IAttributeToProjector;
            _updateXDomainer(): any;
            _updateYDomainer(): any;
        }
    }
}


declare module Plottable {
    module Plot {
        class ClusteredBar extends Abstract.NewStyleBarPlot {
            static DEFAULT_WIDTH: number;
            _isVertical: boolean;
            constructor(xScale: Abstract.Scale, yScale: Abstract.QuantitativeScale);
            _generateAttrToProjector(): IAttributeToProjector;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Plot {
        class StackedBar extends Abstract.NewStyleBarPlot {
            stackedData: any[][];
            _yAccessor: IAccessor;
            _isVertical: boolean;
            _baselineValue: number;
            _baseline: D3.Selection;
            _addDataset(key: string, dataset: any): void;
            _updateAllProjectors(): void;
            _generateAttrToProjector(): IAttributeToProjector;
            _paint(): void;
        }
    }
}


declare module Plottable {
    module Animator {
        /**
         * An animator implementation with no animation. The attributes are
         * immediately set on the selection.
         */
        class Null implements IPlotAnimator {
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
        }
    }
}


declare module Plottable {
    module Animator {
        /**
         * The default animator implementation with easing, duration, and delay.
         */
        class Default implements IPlotAnimator {
            _durationMsec: number;
            _delayMsec: number;
            _easing: string;
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
            /**
             * Gets the duration of the animation in milliseconds.
             *
             * @returns {number} The current duration.
             */
            duration(): number;
            /**
             * Sets the duration of the animation in milliseconds.
             *
             * @param {number} duration The duration in milliseconds.
             * @returns {Default} The calling Default Animator.
             */
            duration(duration: number): Default;
            /**
             * Gets the delay of the animation in milliseconds.
             *
             * @returns {number} The current delay.
             */
            delay(): number;
            /**
             * Sets the delay of the animation in milliseconds.
             *
             * @param {number} delay The delay in milliseconds.
             * @returns {Default} The calling Default Animator.
             */
            delay(delay: number): Default;
            /**
             * Gets the current easing of the animation.
             *
             * @returns {string} the current easing mode.
             */
            easing(): string;
            /**
             * Sets the easing mode of the animation.
             *
             * @param {string} easing The desired easing mode.
             * @returns {Default} The calling Default Animator.
             */
            easing(easing: string): Default;
        }
    }
}


declare module Plottable {
    module Animator {
        /**
         * An animator that delays the animation of the attributes using the index
         * of the selection data.
         *
         * The delay between animations can be configured with the .delay getter/setter.
         */
        class IterativeDelay extends Default {
            _delayMsec: number;
            animate(selection: any, attrToProjector: IAttributeToProjector): D3.Selection;
        }
    }
}


declare module Plottable {
    module Animator {
        /**
         * The default animator implementation with easing, duration, and delay.
         */
        class Rect extends Default {
            static ANIMATED_ATTRIBUTES: string[];
            isVertical: boolean;
            isReverse: boolean;
            constructor(isVertical?: boolean, isReverse?: boolean);
            animate(selection: any, attrToProjector: IAttributeToProjector): any;
            _startMovingAttrProjector(attrToProjector: IAttributeToProjector): IAppliedAccessor;
            _getGrowingAttr(): string;
            _getMovingAttr(): string;
        }
    }
}


declare module Plottable {
    module Animator {
        /**
         * The default animator implementation with easing, duration, and delay.
         */
        class MovingRect extends Rect {
            baseline: number;
            constructor(baseline: number, isVertical?: boolean);
            _startMovingAttrProjector(attrToProjector: IAttributeToProjector): (p: any) => number;
        }
    }
}


declare module Plottable {
    module Core {
        interface IKeyEventListenerCallback {
            (e: D3.D3Event): any;
        }
        module KeyEventListener {
            function initialize(): void;
            function addCallback(keyCode: number, cb: IKeyEventListenerCallback): void;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Interaction {
            hitBox: D3.Selection;
            componentToListenTo: Component;
            /**
             * Creates an Interaction.
             *
             * @constructor
             * @param {Component} componentToListenTo The component to listen for interactions on.
             */
            constructor(componentToListenTo: Component);
            _anchor(hitBox: D3.Selection): void;
            /**
             * Registers the Interaction on the Component it's listening to.
             * This needs to be called to activate the interaction.
             */
            registerWithComponent(): Interaction;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Click extends Abstract.Interaction {
            /**
             * Creates a ClickInteraction.
             *
             * @constructor
             * @param {Component} componentToListenTo The component to listen for clicks on.
             */
            constructor(componentToListenTo: Abstract.Component);
            _anchor(hitBox: D3.Selection): void;
            _listenTo(): string;
            /**
             * Sets an callback to be called when a click is received.
             *
             * @param {(x: number, y: number) => any} cb: Callback to be called. Takes click x and y in pixels.
             */
            callback(cb: (x: number, y: number) => any): Click;
        }
        class DoubleClick extends Click {
            /**
             * Creates a DoubleClickInteraction.
             *
             * @constructor
             * @param {Component} componentToListenTo The component to listen for clicks on.
             */
            constructor(componentToListenTo: Abstract.Component);
            _listenTo(): string;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Mousemove extends Abstract.Interaction {
            constructor(componentToListenTo: Abstract.Component);
            _anchor(hitBox: D3.Selection): void;
            mousemove(x: number, y: number): void;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Key extends Abstract.Interaction {
            /**
             * Creates a KeyInteraction.
             *
             * @constructor
             * @param {Component} componentToListenTo The component to listen for keypresses on.
             * @param {number} keyCode The key code to listen for.
             */
            constructor(componentToListenTo: Abstract.Component, keyCode: number);
            _anchor(hitBox: D3.Selection): void;
            /**
             * Sets an callback to be called when the designated key is pressed.
             *
             * @param {() => any} cb: Callback to be called.
             */
            callback(cb: () => any): Key;
        }
    }
}


declare module Plottable {
    module Interaction {
        class PanZoom extends Abstract.Interaction {
            xScale: Abstract.QuantitativeScale;
            yScale: Abstract.QuantitativeScale;
            /**
             * Creates a PanZoomInteraction.
             *
             * @constructor
             * @param {Component} componentToListenTo The component to listen for interactions on.
             * @param {QuantitativeScale} [xScale] The X scale to update on panning/zooming.
             * @param {QuantitativeScale} [yScale] The Y scale to update on panning/zooming.
             */
            constructor(componentToListenTo: Abstract.Component, xScale?: Abstract.QuantitativeScale, yScale?: Abstract.QuantitativeScale);
            resetZoom(): void;
            _anchor(hitBox: D3.Selection): void;
        }
    }
}


declare module Plottable {
    module Interaction {
        class BarHover extends Abstract.Interaction {
            componentToListenTo: Abstract.BarPlot;
            /**
             * Creates a new BarHover Interaction.
             *
             * @param {Abstract.BarPlot} barPlot The Bar Plot to listen for hover events on.
             */
            constructor(barPlot: Abstract.BarPlot);
            _anchor(hitBox: D3.Selection): void;
            /**
             * Gets the current hover mode.
             *
             * @return {string} The current hover mode.
             */
            hoverMode(): string;
            /**
             * Sets the hover mode for the interaction. There are two modes:
             *     - "point": Selects the bar under the mouse cursor (default).
             *     - "line" : Selects any bar that would be hit by a line extending
             *                in the same direction as the bar and passing through
             *                the cursor.
             *
             * @param {string} mode The desired hover mode.
             * @return {BarHover} The calling Interaction.BarHover.
             */
            hoverMode(mode: string): BarHover;
            /**
             * Attaches an callback to be called when the user mouses over a bar.
             *
             * @param {(datum: any, bar: D3.Selection) => any} The callback to be called.
             *      The callback will be passed the data from the hovered-over bar.
             * @return {BarHover} The calling Interaction.BarHover.
             */
            onHover(callback: (datum: any, bar: D3.Selection) => any): BarHover;
            /**
             * Attaches a callback to be called when the user mouses off of a bar.
             *
             * @param {(datum: any, bar: D3.Selection) => any} The callback to be called.
             *      The callback will be passed the data from the last-hovered bar.
             * @return {BarHover} The calling Interaction.BarHover.
             */
            onUnhover(callback: (datum: any, bar: D3.Selection) => any): BarHover;
        }
    }
}


declare module Plottable {
    module Interaction {
        class Drag extends Abstract.Interaction {
            origin: number[];
            location: number[];
            /**
             * Creates a Drag.
             *
             * @param {Component} componentToListenTo The component to listen for interactions on.
             */
            constructor(componentToListenTo: Abstract.Component);
            /**
             * Gets the callback that is called when dragging starts.
             *
             * @returns {(startLocation: Point) => void}
             */
            dragstart(): (startLocation: Point) => void;
            /**
             * Sets the callback to be called when dragging starts.
             *
             * @param {(startLocation: Point) => any} cb The function to be called.
             * @returns {Drag}
             */
            dragstart(cb: (startLocation: Point) => any): Drag;
            /**
             * Gets the callback that is called during dragging.
             *
             * @returns {(startLocation: Point, endLocation: Point) => void}
             */
            drag(): (startLocation: Point, endLocation: Point) => void;
            /**
             * Adds a callback to be called during dragging.
             *
             * @param {(startLocation: Point, endLocation: Point) => any} cb The function to be called.
             * @returns {Drag}
             */
            drag(cb: (startLocation: Point, endLocation: Point) => any): Drag;
            /**
             * Gets the callback that is called when dragging ends.
             *
             * @returns {(startLocation: Point, endLocation: Point) => void}
             */
            dragend(): (startLocation: Point, endLocation: Point) => void;
            /**
             * Adds a callback to be called when the dragging ends.
             *
             * @param {(startLocation: Point, endLocation: Point) => any} cb The function to be called. Takes in a SelectionArea in pixels.
             * @returns {Drag} The calling Drag.
             */
            dragend(cb: (startLocation: Point, endLocation: Point) => any): Drag;
            _dragstart(): void;
            _doDragstart(): void;
            _drag(): void;
            _doDrag(): void;
            _dragend(): void;
            _doDragend(): void;
            _anchor(hitBox: D3.Selection): Drag;
            setupZoomCallback(xScale?: Abstract.QuantitativeScale, yScale?: Abstract.QuantitativeScale): Drag;
        }
    }
}


declare module Plottable {
    module Interaction {
        class DragBox extends Drag {
            dragBox: D3.Selection;
            boxIsDrawn: boolean;
            _dragstart(): void;
            /**
             * Clears the highlighted drag-selection box drawn by the AreaInteraction.
             *
             * @returns {AreaInteraction} The calling AreaInteraction.
             */
            clearBox(): DragBox;
            setBox(x0: number, x1: number, y0: number, y1: number): DragBox;
            _anchor(hitBox: D3.Selection): DragBox;
        }
    }
}


declare module Plottable {
    module Interaction {
        class XDragBox extends DragBox {
            _drag(): void;
            setBox(x0: number, x1: number): XDragBox;
        }
    }
}


declare module Plottable {
    module Interaction {
        class XYDragBox extends DragBox {
            _drag(): void;
        }
    }
}


declare module Plottable {
    module Interaction {
        class YDragBox extends DragBox {
            _drag(): void;
            setBox(y0: number, y1: number): YDragBox;
        }
    }
}


declare module Plottable {
    module Abstract {
        class Dispatcher extends PlottableObject {
            _target: D3.Selection;
            _event2Callback: {
                [x: string]: () => any;
            };
            /**
             * Creates a Dispatcher with the specified target.
             *
             * @param {D3.Selection} target The selection to listen for events on.
             */
            constructor(target: D3.Selection);
            /**
             * Gets the target of the Dispatcher.
             *
             * @returns {D3.Selection} The Dispatcher's current target.
             */
            target(): D3.Selection;
            /**
             * Sets the target of the Dispatcher.
             *
             * @param {D3.Selection} target The element to listen for updates on.
             * @returns {Dispatcher} The calling Dispatcher.
             */
            target(targetElement: D3.Selection): Dispatcher;
            /**
             * Attaches the Dispatcher's listeners to the Dispatcher's target element.
             *
             * @returns {Dispatcher} The calling Dispatcher.
             */
            connect(): Dispatcher;
            /**
             * Detaches the Dispatcher's listeners from the Dispatchers' target element.
             *
             * @returns {Dispatcher} The calling Dispatcher.
             */
            disconnect(): Dispatcher;
        }
    }
}


declare module Plottable {
    module Dispatcher {
        class Mouse extends Abstract.Dispatcher {
            /**
             * Creates a Mouse Dispatcher with the specified target.
             *
             * @param {D3.Selection} target The selection to listen for events on.
             */
            constructor(target: D3.Selection);
            /**
             * Gets the current callback to be called on mouseover.
             *
             * @return {(location: Point) => any} The current mouseover callback.
             */
            mouseover(): (location: Point) => any;
            /**
             * Attaches a callback to be called on mouseover.
             *
             * @param {(location: Point) => any} callback A function that takes the pixel position of the mouse event.
             *                                            Pass in null to remove the callback.
             * @return {Mouse} The calling Mouse Handler.
             */
            mouseover(callback: (location: Point) => any): Mouse;
            /**
             * Gets the current callback to be called on mousemove.
             *
             * @return {(location: Point) => any} The current mousemove callback.
             */
            mousemove(): (location: Point) => any;
            /**
             * Attaches a callback to be called on mousemove.
             *
             * @param {(location: Point) => any} callback A function that takes the pixel position of the mouse event.
             *                                            Pass in null to remove the callback.
             * @return {Mouse} The calling Mouse Handler.
             */
            mousemove(callback: (location: Point) => any): Mouse;
            /**
             * Gets the current callback to be called on mouseout.
             *
             * @return {(location: Point) => any} The current mouseout callback.
             */
            mouseout(): (location: Point) => any;
            /**
             * Attaches a callback to be called on mouseout.
             *
             * @param {(location: Point) => any} callback A function that takes the pixel position of the mouse event.
             *                                            Pass in null to remove the callback.
             * @return {Mouse} The calling Mouse Handler.
             */
            mouseout(callback: (location: Point) => any): Mouse;
        }
    }
}


declare module Plottable {
    module Template {
        class StandardChart extends Component.Table {
            constructor();
            yAxis(y: Abstract.Axis): StandardChart;
            yAxis(): Abstract.Axis;
            xAxis(x: Abstract.Axis): StandardChart;
            xAxis(): Abstract.Axis;
            yLabel(y: Component.AxisLabel): StandardChart;
            yLabel(y: string): StandardChart;
            yLabel(): Component.AxisLabel;
            xLabel(x: Component.AxisLabel): StandardChart;
            xLabel(x: string): StandardChart;
            xLabel(): Component.AxisLabel;
            titleLabel(x: Component.TitleLabel): StandardChart;
            titleLabel(x: string): StandardChart;
            titleLabel(): Component.TitleLabel;
            center(c: Abstract.Component): StandardChart;
        }
    }
}
